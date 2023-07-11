import React from 'react';

import { IKeyValueDataSource } from 'components/molecules/keyValueTable/types';
import KeyValueTable from 'components/molecules/keyValueTable/KeyValueTable';
import Space from 'components/atoms/space/Space';

import Debt from 'pages/profile/components/debt/Debt';
import Avatar from 'pages/profile/components/avatar/Avatar';
import QrCode from 'pages/profile/components/qrCode/QrCode';

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

const ProfilePageView: React.FC = () => (
  <Space $gap={24}>
    <Avatar />

    <Space $direction="vertical" $gap={24} style={{ flexGrow: 1 }}>
      <KeyValueTable dataSource={dataSource} />
      <Space $gap={24}>
        <QrCode />
        <Debt />
      </Space>
    </Space>
  </Space>
);

export default ProfilePageView;
