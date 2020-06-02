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
