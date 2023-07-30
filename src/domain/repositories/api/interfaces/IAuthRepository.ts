import { IAuthResponse } from 'domain/entities/auth';

export interface IAuthRepository {
  login: (payload: ILoginPayload) => Promise<IAuthResponse>;
  password: (payload: IPasswordPayload) => Promise<IAuthResponse>;
  refresh: () => Promise<IAuthResponse>;

  loginViaQrCode: (payload: ILoginViaQrCodePayload) => Promise<IAuthResponse>;
}

export interface ILoginPayload {
  employeeId: number;
  password: string;
}

export interface IPasswordPayload {
  employeeId: number;
  password: string;
}

export interface ILoginViaQrCodePayload {
  userId: string;
  signature: string;
}
