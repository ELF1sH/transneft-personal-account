import { IShift } from 'domain/entities/shift';

export interface IShiftsRepository {
  getShifts: () => Promise<IGetShiftsResponse>;
}

export type IGetShiftsResponse = IShift[];
