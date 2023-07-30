import React from 'react';

import KeyValueTable from 'components/molecules/keyValueTable/KeyValueTable';
import Space from 'components/atoms/space/Space';

import { useUserContext } from 'modules/providers/userProvider/context';

import { useWindowWidth } from 'utils/hooks/layout/useWindowWidth';

import QrCode from './components/qrCode/QrCode';
import Debt from './components/debt/Debt';
import Avatar from './components/avatar/Avatar';
import { getMainTableDataSource } from './helpers/getMainTableDataSource';

const ProfilePageView: React.FC = () => {
  const { windowWidth } = useWindowWidth();

  const direction = windowWidth > 800 ? 'horizontal' : 'vertical';
  const gap = windowWidth > 700 ? 24 : 6;

  const { profile } = useUserContext();

  return (
    <Space $gap={gap} $direction={direction}>
      <Avatar />

      <Space $direction="vertical" $gap={gap} style={{ flexGrow: 1 }}>
        <KeyValueTable dataSource={getMainTableDataSource(profile)} />
        <Space $gap={gap}>
          <QrCode />
          <Debt />
        </Space>
      </Space>
    </Space>
  );
};

export default ProfilePageView;
