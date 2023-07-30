import { createContext, useContext } from 'react';

import { IGetProfileResponse } from 'domain/repositories/api/interfaces/IUsersRepository';

export interface IUserContextValue {
  profile?: IGetProfileResponse;
}

export const UserContext = createContext<IUserContextValue>({});

export const useUserContext = () => useContext(UserContext);
