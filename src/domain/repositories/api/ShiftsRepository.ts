import { AxiosResponse } from 'axios';

import { IGetShiftsResponse, IShiftsRepository } from './interfaces/IShiftsRepository';
import { axiosInstance } from './axiosInstance';

class ShiftsRepository implements IShiftsRepository {
  private readonly prefix = 'shifts';

  public getShifts = () => axiosInstance
    .get(this.prefix)
    .then((response: AxiosResponse<IGetShiftsResponse>) => response.data);
}

export const shiftsRepository = new ShiftsRepository();
