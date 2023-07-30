import { AxiosResponse } from 'axios';

import {
  IGetEducationsPayload, IGetEducationsResponse, IGetMeasuresPayload, IGetMeasuresResponse,
  IGetMedicalCheckupsPayload, IGetMedicalCheckupsResponse,
  IGetPasswordStatusPayload,
  IGetPasswordStatusResponse,
  IGetProfilePayload, IGetProfileResponse, IGetQrCodePayload, IGetQrCodeResponse,
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

  public getQrCode = ({ userId }: IGetQrCodePayload) => axiosInstance
    .get(`${this.prefix}/${userId}/qr-code`)
    .then((response: AxiosResponse<IGetQrCodeResponse>) => response.data);

  public getMedicalCheckups = ({ userId }: IGetMedicalCheckupsPayload) => axiosInstance
    .get(`${this.prefix}/${userId}/examinations`)
    .then((response: AxiosResponse<IGetMedicalCheckupsResponse>) => response.data);

  public getEducations = ({ userId }: IGetEducationsPayload) => axiosInstance
    .get(`${this.prefix}/${userId}/educations`)
    .then((response: AxiosResponse<IGetEducationsResponse>) => response.data);

  public getMeasures = ({ userId }: IGetMeasuresPayload) => axiosInstance
    .get(`${this.prefix}/${userId}/measures`)
    .then((response: AxiosResponse<IGetMeasuresResponse>) => response.data);
}

export const usersRepository = new UsersRepository();
