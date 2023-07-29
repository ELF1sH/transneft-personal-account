export interface IUsersRepository {
  getPasswordStatus: (payload: IGetPasswordStatusPayload) => Promise<IGetPasswordStatusResponse>;

  getProfile: (payload: IGetProfilePayload) => Promise<IGetProfileResponse>;
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
