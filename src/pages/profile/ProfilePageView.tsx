import React from 'react';

import KeyValueTable from 'components/molecules/keyValueTable/KeyValueTable';
import { IKeyValueDataSource } from 'components/molecules/keyValueTable/types';
import Space from 'components/atoms/space/Space';

import Debt from 'pages/profile/components/debt/Debt';
import Avatar from 'pages/profile/components/avatar/Avatar';
import QrCode from 'pages/profile/components/qrCode/QrCode';

import { useWindowWidth } from 'utils/hooks/useWindowWidth';

const dataSource: IKeyValueDataSource[] = [
  {
    key: '1',
    title: 'Табельный номер',
    value: '13023478 ',
  },
  {
    key: '2',
    title: 'ФИО',
    value: 'Шевцов Олег Петрович',
  },
  {
    key: '3',
    title: 'Должность',
    value: 'Инженер-механик 1 категории',
  },
  {
    key: '4',
    title: 'Подразделение',
    value: 'Участок механотехнологического оборудования ЛПДС «Нижневартовская» филиал «Нижневартовское УМН»',
  },
];

const ProfilePageView: React.FC = () => {
  const { windowWidth } = useWindowWidth();

  const direction = windowWidth > 800 ? 'horizontal' : 'vertical';
  const gap = windowWidth > 700 ? 24 : 6;

  return (
    <Space $gap={gap} $direction={direction}>
      <Avatar />

      <Space $direction="vertical" $gap={gap} style={{ flexGrow: 1 }}>
        <KeyValueTable dataSource={dataSource} />
        <Space $gap={gap}>
          <QrCode />
          <Debt />
        </Space>
      </Space>
    </Space>
  );
};

export default ProfilePageView;
