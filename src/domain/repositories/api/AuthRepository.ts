import { AxiosResponse } from 'axios';

import { IAuthResponse } from 'domain/entities/auth';

import { axiosInstance } from './axiosInstance';
import { IAuthRepository, ILoginPayload, IPasswordPayload } from './interfaces/IAuthRepository';

class AuthRepository implements IAuthRepository {
  private readonly prefix = 'auth';

  public login = (payload: ILoginPayload) => axiosInstance
    .post(`${this.prefix}/login`, payload)
    .then((response: AxiosResponse<IAuthResponse>) => response.data);

  public password = (payload: IPasswordPayload) => axiosInstance
    .post(`${this.prefix}/password`, payload)
    .then((response: AxiosResponse<IAuthResponse>) => response.data);

  public refresh = () => axiosInstance
    .post(`${this.prefix}/refresh`)
    .then((response: AxiosResponse<IAuthResponse>) => response.data);
}

export const authRepository = new AuthRepository();
