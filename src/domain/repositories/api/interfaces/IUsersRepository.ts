import { IMedicalCheckup } from 'domain/entities/medicalCheckup';
import { IEducation } from 'domain/entities/education';
import { IInventoryControlItem } from 'domain/entities/inventoryControlItem';

export interface IUsersRepository {
  getPasswordStatus: (payload: IGetPasswordStatusPayload) => Promise<IGetPasswordStatusResponse>;

  getProfile: (payload: IGetProfilePayload) => Promise<IGetProfileResponse>;

  getQrCode: (payload: IGetQrCodePayload) => Promise<IGetQrCodeResponse>;

  getMedicalCheckups: (payload: IGetMedicalCheckupsPayload) => Promise<IGetMedicalCheckupsResponse>;

  getEducations: (payload: IGetEducationsPayload) => Promise<IGetEducationsResponse>;

  getMeasures: (payload: IGetMeasuresPayload) => Promise<IGetMeasuresResponse>;
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

export interface IGetEducationsPayload {
  userId: string;
}
export type IGetEducationsResponse = IEducation[];

export interface IGetMeasuresPayload {
  userId: string;
}
export type IGetMeasuresResponse = IInventoryControlItem;
