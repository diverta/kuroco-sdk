const Flow = require('./flow.js');
import { Flow as IFlow, FlowFile as IFlowFile, FlowChunk as IFlowChunk } from 'flowjs';
type IExtendedFlow = IFlow & {
    /** returns file_id */
    uploadAsync: () => Promise<string>;
};

export function generateUploader(gcsHost: string, accessToken: string, chunkSize = 1024 * 1024 * 1024 * 5) {
    const target = getTarget(gcsHost);
    const headers = getHeaders(accessToken);

    const FlowClzz = (window as any).Flow || Flow;

    const flow: IExtendedFlow = new FlowClzz({
        chunkSize,
        target,
        headers,
        generateUniqueIdentifier,
        changeRawDataBeforeSend,
        flowAccessToken: accessToken,
        uploadMethod: 'PUT',
        testChunks: false,
        simultaneousUploads: 1,
        successStatuses: [200, 201, 202, 204],
    });

    flow.on('fileSuccess', handleOnSucceeded);
    function handleOnSucceeded(file: IFlowFile) {
        console.log(file);
    }

    flow.uploadAsync = () =>
        new Promise<string>((res, rej) => {
            flow.on('fileSuccess', (file, message, chunk) => res(`files/temp/${file.uniqueIdentifier}__rcms_gcs_upload_chunk_number__${chunk.offset}`));
            flow.on('error', () => rej());
            flow.upload();
        });

    return flow;
}

export function getTarget(uri: string) {
    return (flowFile: IFlowFile, flowChunk: IFlowChunk) => `${uri}/files/temp/${flowFile.uniqueIdentifier}__rcms_gcs_upload_chunk_number__${flowChunk.offset}`;
}

export function getHeaders(accessToken: string) {
    return (flowFile: IFlowFile, flowChunk: IFlowChunk) => {
        let headers = {
            Authorization: 'Bearer ' + accessToken,
            'x-goog-meta-rcms_gcs_x_meta_chunk_number': flowChunk.offset,
            'x-goog-meta-rcms_gcs_x_meta_current_chunk_size': flowChunk.endByte - flowChunk.startByte,
            'x-goog-meta-rcms_gcs_x_meta_total_size': flowChunk.fileObj.size,
            'x-goog-meta-rcms_gcs_x_meta_identifier': flowChunk.fileObj.uniqueIdentifier,
            'x-goog-meta-rcms_gcs_x_meta_filename': encodeURI(flowChunk.fileObj.name),
            'x-goog-meta-rcms_gcs_x_meta_total_chunks': flowChunk.fileObj.chunks.length,
            'x-goog-acl': 'public-read',
            'Content-Type': (flowChunk as any).bytes.type,
        };
        return headers;
    };
}

export function generateUniqueIdentifier(file: File) {
    let relativePath = (file as any).relativePath || (file as any).webkitRelativePath || (file as any).fileName || (file as any).name;
    let time = new Date().getTime();
    return time + '_' + file.size + '_' + relativePath.replace(/[^0-9a-zA-Z_-]/gim, '');
}

export function changeRawDataBeforeSend(flowChunk: IFlowChunk, data: any) {
    let chunkData = (flowChunk as any).bytes;
    let blob = new Blob([chunkData], { type: chunkData.type });
    return blob;
}
