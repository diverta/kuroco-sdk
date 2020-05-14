/**
 * Get the service operation name fallback.
 * @param strs
 */
export function getOperationNameFallback(strs: string[]): string {
    const rtn = strs
        .map(str =>
            str
                .replace(/\{(.*?)\}/g, (_, w: string) => w)
                .split(/\/| |-|_|\./g)
                .map(s => s.charAt(0).toUpperCase() + s.slice(1))
                .join('')
        )
        .join('');

    return rtn.charAt(0).toLowerCase() + rtn.slice(1);
}
