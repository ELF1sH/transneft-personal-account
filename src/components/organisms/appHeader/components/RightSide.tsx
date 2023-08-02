import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Typography } from 'antd';

import { Avatar, AvatarWrapper } from 'components/organisms/appHeader/styled';
import { NoPictureDummy } from 'components/atoms/noPictureDummy/NoPictureDummy';
import Space from 'components/atoms/space/Space';

import { APP_HEADER_EXPANDED_HEIGHT } from 'constants/layout';

import { tokenRepository } from 'domain/repositories/cookies/TokenRepository';

import { useUserContext } from 'modules/providers/userProvider/context';

import { getRoute } from 'utils/routes/getRoute';
import { RouteItem } from 'utils/interfaces/routes';
import { useAppHeaderHeight } from 'utils/hooks/layout/useAppHeaderHeight';

import NotificationsPopover from './notificationsPopover/NotificationsPopover';

const RightSide: React.FC = () => {
  const { profile } = useUserContext();
  const navigate = useNavigate();

  const { appHeaderHeight } = useAppHeaderHeight();

  const RIGHT_SIDE_GAP = 12;

  const onLogout = () => {
    tokenRepository.reset();

    navigate(getRoute(RouteItem.BASE));
  };

  return (
    <Space $justifyContent="end" style={{ position: 'relative', zIndex: 1 }} $direction={appHeaderHeight === APP_HEADER_EXPANDED_HEIGHT ? 'vertical' : 'horizontal'} $alignItems="center" $gap={appHeaderHeight === APP_HEADER_EXPANDED_HEIGHT ? 0 : RIGHT_SIDE_GAP}>
      <Space $fitContent $alignItems="center" $gap={RIGHT_SIDE_GAP}>
        <Link
          to={getRoute(RouteItem.PROFILE)}
          style={{ textDecoration: 'none' }}
        >
          <Space $fitContent style={{ flexShrink: 0 }} $gap={4}>
            <AvatarWrapper>
              {
                profile?.avatar
                  ? <Avatar src={profile.avatar} />
                  : <NoPictureDummy fontSize="20px" />
              }
            </AvatarWrapper>
            <Typography.Text style={{ display: 'inline' }}>{profile?.fullName}</Typography.Text>
          </Space>
        </Link>
      </Space>

      <div>
        <NotificationsPopover />
        <Button onClick={onLogout} style={{ marginLeft: '12px' }}>Выйти</Button>
      </div>
    </Space>
  );
};

export default RightSide;
