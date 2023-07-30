import { createContext, useContext } from 'react';

import { IGetScheduleResponse } from 'domain/repositories/api/interfaces/IUsersRepository';

export interface WorkingScheduleContextValue {
  currentTab: number;
  setCurrentTab: (tab: number) => void;
  schedule?: IGetScheduleResponse;
}

export const WorkingScheduleContext = createContext<WorkingScheduleContextValue>({
  currentTab: 1,
  setCurrentTab: () => {},
  schedule: undefined,
});

export const useWorkingScheduleContext = () => useContext(WorkingScheduleContext);
