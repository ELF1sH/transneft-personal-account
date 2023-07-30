import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import WithLoader from 'components/molecules/withLoader/WithLoader';

import { usersRepository } from 'domain/repositories/api/UsersRepository';
import { tokenRepository } from 'domain/repositories/cookies/TokenRepository';

import MedicalCheckupPageView, { MedicalCheckupPageViewProps } from './MedicalCheckupPageView';

const ViewWithLoader = WithLoader<MedicalCheckupPageViewProps>(MedicalCheckupPageView);

const MedicalCheckupPageController: React.FC = () => {
  const userId = tokenRepository.getUserId();

  const {
    data, isLoading, isError, error,
  } = useQuery(['medicalCheckups'], {
    queryFn: () => usersRepository.getMedicalCheckups({ userId: userId! }),
  });

  return (
    <ViewWithLoader
      isLoading={isLoading}
      isError={isError}
      error={error as AxiosError}
      medicalCheckups={data ?? []}
    />
  );
};

export default MedicalCheckupPageController;
