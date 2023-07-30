import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import WithLoader from 'components/molecules/withLoader/WithLoader';

import { tokenRepository } from 'domain/repositories/cookies/TokenRepository';
import { usersRepository } from 'domain/repositories/api/UsersRepository';

import InventoryControlPageView, { InventoryControlPageViewProps } from './InventoryControlPageView';

const ViewWithLoader = WithLoader<InventoryControlPageViewProps>(InventoryControlPageView);

const InventoryControlPageController: React.FC = () => {
  const userId = tokenRepository.getUserId();

  console.log(userId);

  const {
    data, isLoading, isError, error,
  } = useQuery(['measures'], {
    queryFn: () => usersRepository.getMeasures({ userId: userId! }),
  });

  return (
    <ViewWithLoader
      isLoading={isLoading}
      isError={isError}
      error={error as AxiosError}
      measure={data!}
    />
  );
};

export default InventoryControlPageController;
