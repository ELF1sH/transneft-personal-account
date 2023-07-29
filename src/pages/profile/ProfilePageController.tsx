import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import WithLoader from 'components/molecules/withLoader/WithLoader';

import { usersRepository } from 'domain/repositories/api/UsersRepository';
import { tokenRepository } from 'domain/repositories/cookies/TokenRepository';

import ProfilePageView, { ProfilePageViewProps } from './ProfilePageView';

const ViewWithLoader = WithLoader<ProfilePageViewProps>(ProfilePageView);

const ProfilePageController: React.FC = () => {
  const userId = tokenRepository.getUserId();

  const {
    data, isLoading, isError, error,
  } = useQuery({
    queryKey: ['todos'],
    queryFn: () => usersRepository.getProfile({ userId: userId! }),
  });

  return (
    <ViewWithLoader
      isLoading={isLoading}
      isError={isError}
      error={error as AxiosError}
      data={data}
    />
  );
};

export default ProfilePageController;
