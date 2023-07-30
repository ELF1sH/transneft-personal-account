import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { Spin } from 'components/atoms/spin/Spin';

import { authRepository } from 'domain/repositories/api/AuthRepository';
import { tokenRepository } from 'domain/repositories/cookies/TokenRepository';

import { getRoute } from 'utils/routes/getRoute';
import { RouteItem } from 'utils/interfaces/routes';

const QrPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const userId = searchParams.get('userId');
  const signature = searchParams.get('signature');

  if (!userId || !signature) {
    navigate(getRoute(RouteItem.BASE));
  }

  const { data, isLoading } = useQuery(['login-via-qr-code'], {
    queryFn: () => authRepository.loginViaQrCode({ userId: userId!, signature: signature! }),
  });

  useEffect(() => {
    if (!isLoading) {
      if (data) {
        tokenRepository.init(data.accessToken, data.refreshToken);

        navigate(getRoute(RouteItem.PROFILE));
      } else {
        navigate(getRoute(RouteItem.BASE));
      }
    }
  }, [data, isLoading]);

  return (
    <Spin size="large" />
  );
};

export default QrPage;
