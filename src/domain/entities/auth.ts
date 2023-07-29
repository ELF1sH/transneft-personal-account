export interface IAuthResponse {
  accessToken: string;
  accessTokenExpiresIn: string;

  refreshToken: string;
  refreshTokenExpiresIn: string;
}
