import { IMedicalCheckup } from 'domain/entities/medicalCheckup';

export interface IUsersRepository {
  getPasswordStatus: (payload: IGetPasswordStatusPayload) => Promise<IGetPasswordStatusResponse>;

  getProfile: (payload: IGetProfilePayload) => Promise<IGetProfileResponse>;

  getQrCode: (payload: IGetQrCodePayload) => Promise<IGetQrCodeResponse>;

  getMedicalCheckups: (payload: IGetMedicalCheckupsPayload) => Promise<IGetMedicalCheckupsResponse>;
}

export interface IGetPasswordStatusPayload {
  employeeId: number;
}
export interface IGetPasswordStatusResponse {
  id: string;
  employeeId: number;
  isPasswordSet: boolean;
}

export interface IGetProfilePayload {
  userId: string;
}
export interface IGetProfileResponse {
  employeeId: number;
  fullName: string;
  division: string;
  position: string;
  avatar: null;
}

export interface IGetQrCodePayload {
  userId: string;
}
export interface IGetQrCodeResponse {
  url: string;
}

export interface IGetMedicalCheckupsPayload {
  userId: string;
}
export type IGetMedicalCheckupsResponse = IMedicalCheckup[];
