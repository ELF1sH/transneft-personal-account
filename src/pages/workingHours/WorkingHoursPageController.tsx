import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import WithLoader from 'components/molecules/withLoader/WithLoader';

import { shiftsRepository } from 'domain/repositories/api/ShiftsRepository';

import WorkingHoursPageView, { WorkingHoursPageViewProps } from './WorkingHoursPageView';

const ViewWithLoader = WithLoader<WorkingHoursPageViewProps>(WorkingHoursPageView);

const WorkingHoursPageController: React.FC = () => {
  const {
    data, isLoading, isError, error,
  } = useQuery(['shifts'], {
    queryFn: shiftsRepository.getShifts,
  });

  return (
    <ViewWithLoader
      isLoading={isLoading}
      isError={isError}
      error={error as AxiosError}
      shifts={data ?? []}
    />
  );
};

export default WorkingHoursPageController;
