import { AxiosResponse } from 'axios';

import {
  IGetPasswordStatusPayload,
  IGetPasswordStatusResponse,
  IGetProfilePayload, IGetProfileResponse,
  IUsersRepository,
} from './interfaces/IUsersRepository';
import { axiosInstance } from './axiosInstance';

class UsersRepository implements IUsersRepository {
  private readonly prefix = 'users';

  public getPasswordStatus = ({ employeeId }: IGetPasswordStatusPayload) => axiosInstance
    .get(`${this.prefix}/${employeeId}`)
    .then((response: AxiosResponse<IGetPasswordStatusResponse>) => response.data);

  public getProfile = ({ userId }: IGetProfilePayload) => axiosInstance
    .get(`${this.prefix}/${userId}/profile`)
    .then((response: AxiosResponse<IGetProfileResponse>) => response.data);
}

export const usersRepository = new UsersRepository();
