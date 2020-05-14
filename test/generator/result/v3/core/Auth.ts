/* tslint:disable */
import { SpecialOperationInfo } from './ApiInfo';

export class Auth {
  public static async login(
    param: Parameters<typeof SpecialOperationInfo.login.method>[0]
  ) {
    Auth.deleteAccessToken();
    Auth.deleteRefreshToken();

    if (!SpecialOperationInfo.login) {
      return Promise.resolve();
    }

    const res = await SpecialOperationInfo.login.method(param);
    const { grant_token, errors } = res;

    if (errors && Array.isArray(errors) && errors.length > 0) {
      return Promise.reject(errors);
    }

    return await Auth.createToken({ requestBody: { grant_token } });
  }

  public static async loginWithStoredToken(
    param: Parameters<typeof Auth.createToken>[0]
  ) {
    const refreshToken = Auth.getRefreshToken();
    if (refreshToken === '') {
      await null;
      return Promise.reject('no refresh token.');
    }
    return await Auth.createToken(param);
  }

  public static async logout(
    param: Parameters<typeof SpecialOperationInfo.logout.method>[0]
  ) {
    if (!SpecialOperationInfo.logout) {
      return Promise.resolve();
    }
    return await SpecialOperationInfo.logout.method(param).finally(() => {
      Auth.deleteAccessToken();
      Auth.deleteRefreshToken();
    });
  }

  public static async createToken(
    param: Parameters<typeof SpecialOperationInfo.token.method>[0]
  ) {
    if (!SpecialOperationInfo.token) {
      return Promise.resolve();
    }

    const res = await SpecialOperationInfo.token.method(param);
    const { access_token, refresh_token } = res;
    access_token ? Auth.setAccessToken(access_token) : undefined;
    refresh_token ? Auth.setRefreshToken(refresh_token) : undefined;

    return res;
  }

  /** get */
  public static getAccessToken() {
    return localStorage.getItem(Auth.TokenKeys.accessToken) || '';
  }
  public static getRefreshToken() {
    return localStorage.getItem(Auth.TokenKeys.refreshToken) || '';
  }

  /** set */
  public static setAccessToken(token: string) {
    localStorage.setItem(Auth.TokenKeys.accessToken, token);
  }
  public static setRefreshToken(token: string) {
    localStorage.setItem(Auth.TokenKeys.refreshToken, token);
  }

  /** delete */
  public static deleteAccessToken() {
    localStorage.removeItem(Auth.TokenKeys.accessToken);
  }
  public static deleteRefreshToken() {
    localStorage.removeItem(Auth.TokenKeys.refreshToken);
  }
}

export namespace Auth {
  export enum TokenKeys {
    accessToken = 'accessToken',
    refreshToken = 'refreshToken',
  }
}

export interface LoginResponse {
  grant_token: string;
  status: number;
  info: any;
  messages: string[];
  errors: string[];
}

export interface TokenResponse {
  access_token: string;
  refresh_token: string;
}
