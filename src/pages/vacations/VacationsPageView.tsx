import { pagination } from 'constants/tables/pagination';

import React from 'react';
import { Table } from 'antd';

import PageContentInnerWrapper from 'components/wrappers/pageContentInnerWrapper/PageContentInnerWrapper';

import { IVacation } from 'domain/entities/vacation';

import { useColumns } from 'pages/vacations/hooks/useColumns';

const dataSource: IVacation[] = [
  {
    date: '13.03.2023',
    main: 20,
    mks: 8,
    irregularDays: 0,
    totalDays: 28,
    materialAid: false,
    reducedFare: true,
  },
  {
    date: '01.11.2023',
    main: 8,
    mks: 8,
    irregularDays: 0,
    totalDays: 16,
    materialAid: true,
    reducedFare: false,
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
