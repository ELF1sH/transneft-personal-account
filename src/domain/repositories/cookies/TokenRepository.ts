import { decodeJwt } from 'utils/tokens/decodeJwt';

import { ITokenRepository } from './interfaces/ITokenRepository';
import { BaseCookiesRepository } from './BaseCookiesRepository';

export class TokenRepository extends BaseCookiesRepository implements ITokenRepository {
  private readonly accessTokenKey = 'access_token';

  private readonly refreshTokenKey = 'refresh_token';

  private readonly userIdKey = 'user_id';

  private readonly employeeIdKey = 'employee_id';

  public constructor() {
    super();

    const accessToken = this.getAccessToken();

    if (accessToken) {
      const { userId } = decodeJwt(accessToken);

      if (userId) {
        this.setUserId(userId);
      }
    }
  }

  public init = (accessToken: string, refreshToken: string) => {
    this.setAccessToken(accessToken);
    this.setRefreshToken(refreshToken);

    const { userId } = decodeJwt(accessToken);

    if (userId) {
      this.setUserId(userId);
    }
  };

  public setAccessToken = (token: string) => this.set(this.accessTokenKey, token);

  public getAccessToken = () => this.get(this.accessTokenKey);

  public setRefreshToken = (token: string) => this.set(this.refreshTokenKey, token);

  public getRefreshToken = () => this.get(this.refreshTokenKey);

  public setUserId = (userId: string) => this.set(this.userIdKey, userId);

  public getUserId = () => this.get(this.userIdKey);

  public setEmployeeId = (employeeId: string) => this.set(this.employeeIdKey, employeeId);

  public getEmployeeId = () => this.get(this.employeeIdKey);

  public reset = () => {
    this.remove(this.accessTokenKey);
    this.remove(this.refreshTokenKey);
    this.remove(this.userIdKey);
    this.remove(this.employeeIdKey);
  };
}

export const tokenRepository = new TokenRepository();
