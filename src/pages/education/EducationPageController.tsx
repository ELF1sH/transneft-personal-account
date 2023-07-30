import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import WithLoader from 'components/molecules/withLoader/WithLoader';

import { tokenRepository } from 'domain/repositories/cookies/TokenRepository';
import { usersRepository } from 'domain/repositories/api/UsersRepository';

import EducationPageView, { EducationPageViewProps } from './EducationPageView';

const ViewWithLoader = WithLoader<EducationPageViewProps>(EducationPageView);

const EducationPageController: React.FC = () => {
  const userId = tokenRepository.getUserId();

  const {
    data, isLoading, isError, error,
  } = useQuery(['educations'], {
    queryFn: () => usersRepository.getEducations({ userId: userId! }),
  });

  return (
    <ViewWithLoader
      isLoading={isLoading}
      isError={isError}
      error={error as AxiosError}
      educations={data ?? []}
    />
  );
};

export default EducationPageController;
