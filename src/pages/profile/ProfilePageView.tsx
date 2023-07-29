import React from 'react';

import KeyValueTable from 'components/molecules/keyValueTable/KeyValueTable';
import Space from 'components/atoms/space/Space';

import { IGetProfileResponse } from 'domain/repositories/api/interfaces/IUsersRepository';

import { useWindowWidth } from 'utils/hooks/layout/useWindowWidth';

import QrCode from './components/qrCode/QrCode';
import Debt from './components/debt/Debt';
import Avatar from './components/avatar/Avatar';
import { getMainTableDataSource } from './helpers/getMainTableDataSource';

export interface ProfilePageViewProps {
  data?: IGetProfileResponse;
}

const ProfilePageView: React.FC<ProfilePageViewProps> = ({ data }) => {
  const { windowWidth } = useWindowWidth();

  const direction = windowWidth > 800 ? 'horizontal' : 'vertical';
  const gap = windowWidth > 700 ? 24 : 6;

  return (
    <Space $gap={gap} $direction={direction}>
      <Avatar />

      <Space $direction="vertical" $gap={gap} style={{ flexGrow: 1 }}>
        <KeyValueTable dataSource={getMainTableDataSource(data)} />
        <Space $gap={gap}>
          <QrCode />
          <Debt />
        </Space>
      </Space>
    </Space>
  );
};

export default ProfilePageView;
