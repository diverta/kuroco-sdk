/**
 * this file is a definition which is supposed to be used anywhere.
 */

/** general configuration of this app */
export interface KurocoConfig {
    sdk_key: string;
    api_url: string;
    gcp?: {
        firebaseConfig: FirebaseConfig;
    };
}

/** firebase configuration of this app */
export interface FirebaseConfig {
    apiKey: string;
    authDomain: string;
    databaseURL: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId: string;
}

/** handler with exporting success message on succeeded */
export function handleSuccess(...msgs: string[]) {
    log([Font.FgGreen, Font.Bright], `Process was succeeded.`);
    msgs.forEach(msg => log([Font.FgGreen], msg));
}
/** handler with exporting success message on error occured */
export function handleError(e: any) {
    log([Font.FgRed, Font.Bright], `Process was failed.`);
    log([Font.FgRed], `${e}`);
    process.exit(1);
}

function log(fonts: Font[], ...msgs: string[]) {
    console.log(`${fonts.join('')}%s${Font.Reset}`, msgs.join('\n'));
}
/**
 * font configuration on CLI.
 * @see https://stackoverflow.com/a/41407246
 */
enum Font {
    Reset = '\x1b[0m',
    Bright = '\x1b[1m',
    Dim = '\x1b[2m',
    Underscore = '\x1b[4m',
    Blink = '\x1b[5m',
    Reverse = '\x1b[7m',
    Hidden = '\x1b[8m',

    FgBlack = '\x1b[30m',
    FgRed = '\x1b[31m',
    FgGreen = '\x1b[32m',
    FgYellow = '\x1b[33m',
    FgBlue = '\x1b[34m',
    FgMagenta = '\x1b[35m',
    FgCyan = '\x1b[36m',
    FgWhite = '\x1b[37m',

    BgBlack = '\x1b[40m',
    BgRed = '\x1b[41m',
    BgGreen = '\x1b[42m',
    BgYellow = '\x1b[43m',
    BgBlue = '\x1b[44m',
    BgMagenta = '\x1b[45m',
    BgCyan = '\x1b[46m',
    BgWhite = '\x1b[47m',
}