export function isExists(any: any, { notEmptyString }: any = {}): boolean {
    let notEmpty = any !== undefined && any !== null;

    if (notEmptyString) {
        notEmpty = notEmpty && any !== '';
    }

    return notEmpty;
}
