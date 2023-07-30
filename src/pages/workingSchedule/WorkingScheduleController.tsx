import React, { useEffect, useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import WithLoader from 'components/molecules/withLoader/WithLoader';
import PageContentInnerWrapper from 'components/wrappers/pageContentInnerWrapper/PageContentInnerWrapper';

import { usersRepository } from 'domain/repositories/api/UsersRepository';
import { tokenRepository } from 'domain/repositories/cookies/TokenRepository';

import WorkingScheduleView from './WorkingScheduleView';
import { WorkingScheduleContext } from './context';
import MonthsTabs from './components/monthsTabs/MonthsTabs';

const ViewWithLoader = WithLoader(WorkingScheduleView);

const WorkingScheduleController: React.FC = () => {
  const userId = tokenRepository.getUserId();

  const [currentTab, setCurrentTab] = useState<number>(1);

  const {
    data, isFetching, isError, error, refetch,
  } = useQuery(['schedule'], {
    queryFn: () => usersRepository.getSchedule({ userId: userId!, month: currentTab }),
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  useEffect(() => { refetch(); }, [currentTab]);

  const contextValue = useMemo(
    () => ({ currentTab, setCurrentTab: (tab: number) => setCurrentTab(tab), schedule: data }),
    [data, isFetching, currentTab],
  );

  return (
    <WorkingScheduleContext.Provider value={contextValue}>
      <PageContentInnerWrapper style={{ padding: '0 24px', marginBottom: '24px' }}>
        <MonthsTabs />
      </PageContentInnerWrapper>

      <ViewWithLoader
        isLoading={isFetching}
        isError={isError}
        error={error as AxiosError}
      />
    </WorkingScheduleContext.Provider>
  );
};

export default WorkingScheduleController;
