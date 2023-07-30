import React, { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { Spin } from 'components/atoms/spin/Spin';

import { usersRepository } from 'domain/repositories/api/UsersRepository';
import { tokenRepository } from 'domain/repositories/cookies/TokenRepository';

import { IChildren } from 'utils/interfaces/helpers';
import { getRoute } from 'utils/routes/getRoute';
import { RouteItem } from 'utils/interfaces/routes';

import { IUserContextValue, UserContext } from './context';

const UserProvider: React.FC<IChildren> = ({ children }) => {
  const userId = tokenRepository.getUserId();
  const navigate = useNavigate();

  if (!userId) navigate(getRoute(RouteItem.BASE));

  const { data, isLoading } = useQuery({
    queryKey: ['profile'],
    queryFn: () => usersRepository.getProfile({ userId: userId! }),
  });

  const contextValue = useMemo<IUserContextValue>(
    () => ({ profile: data }),
    [data, isLoading],
  );

  if (isLoading) return <Spin size="large" />;

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
