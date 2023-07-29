import { pagination } from 'constants/tables/pagination';

import React from 'react';
import { Table } from 'antd';

import PageContentInnerWrapper from 'components/wrappers/pageContentInnerWrapper/PageContentInnerWrapper';

import { IVacation } from 'domain/entities/vacation';

import { useColumns } from './hooks/useColumns';

const dataSource: IVacation[] = [
  {
    id: '123',
    date: '13.03.2023',
    generalDays: 4,
    northernDays: 5,
    irregularDays: 6,
    assistance: true,
    preferentialTravel: false,
  },
  {
    id: '1232',
    date: '13.03.2023',
    generalDays: 4,
    northernDays: 5,
    irregularDays: 6,
    assistance: true,
    preferentialTravel: false,
  },
];

const VacationsPageView: React.FC = () => {
  const columns = useColumns();

  return (
    <PageContentInnerWrapper>
      <Table
        columns={columns}
        dataSource={dataSource}
        bordered
        pagination={pagination}
        rowKey="date"
        scroll={{ x: 'fit-content' }}
      />
    </PageContentInnerWrapper>
  );
};

export default VacationsPageView;
