import { appHeaderHeight } from 'constants/appHeaderHeight';

import React from 'react';
import Sider from 'antd/es/layout/Sider';
import { Menu, MenuProps } from 'antd';

const items1: MenuProps['items'] = [
  {
    key: 'personnelAccounting',
    label: 'Кадровый учет',
    children: [
      {
        key: 'vacations',
        label: 'Отпуска',
      },
      {
        key: 'medicalCheckup',
        label: 'Медицинский осмотр и психиатрическое освидетельствование',
        dashed: false,
      },
      {
        key: 'education',
        label: 'Планируемое обучение',
        dashed: true,
      },
    ],
  },
  {
    key: 'inventoryControl',
    label: 'Складской учет',
  },
  {
    key: 'laborOrganisation',
    label: 'Организация труда',
    children: [
      {
        key: 'workingHours',
        label: 'Режим работы',
      },
      {
        key: 'workingSchedule',
        label: 'Графики работы',
      },
    ],
  },
  {
    key: 'paperwork',
    label: 'Оформление документов',
    children: [
      {
        key: 'reducedFare',
        label: 'Льготный проезд',
      },
      {
        key: 'incomeTax',
        label: 'НДФЛ',
      },
      {
        key: 'birthPension',
        label: 'Единовременное пособие по рождению ребенка',
      },
      {
        key: 'taxDeduction',
        label: 'Налоговый вычет',
      },
      {
        key: 'rental',
        label: 'Аренда жилья',
      },
      {
        key: 'kindergarten',
        label: 'Детский сад',
      },
      {
        key: 'sanatorium',
        label: 'Санаторий',
      },
      {
        key: 'vacationApplications',
        label: 'Заявления на отпуска',
      },
      {
        key: 'enquiry',
        label: 'Справка с места работы',
      },
      {
        key: 'workBookCopy',
        label: 'Копия трудовой книжки',
      },
    ],
  },
  {
    key: 'phonebook',
    label: 'Телефонный справочник',
  },
];

const Sidebar: React.FC = () => (
  <Sider width={220}>
    <Menu
      style={{ minHeight: `calc(100vh - ${appHeaderHeight}px)` }}
      mode="inline"
      items={items1}
    />
  </Sider>
);

export default Sidebar;
