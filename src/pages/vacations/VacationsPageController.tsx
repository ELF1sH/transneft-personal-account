import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { TablePaginationConfig } from 'antd/lib';

import PageContentInnerWrapper from 'components/wrappers/pageContentInnerWrapper/PageContentInnerWrapper';
import Table from 'components/molecules/table/Table';

import { usersRepository } from 'domain/repositories/api/UsersRepository';
import { tokenRepository } from 'domain/repositories/cookies/TokenRepository';

import { pagination } from 'pages/vacations/constants/pagination';

import { useColumns } from './hooks/useColumns';

const VacationsPageController: React.FC = () => {
  const userId = tokenRepository.getUserId();
  const columns = useColumns();

  const [current, setCurrent] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);

  const { data, isLoading } = useQuery(['vacations', current, pageSize], {
    queryFn: () => usersRepository.getVacations({
      userId: userId!,
      page: current,
      limit: pageSize,
    }),
  });

  const handleTableChange = (
    pagination: TablePaginationConfig,
  ) => {
    setCurrent(pagination.current ?? 1);
    setPageSize(pagination.pageSize ?? 10);
  };

  return (
    <PageContentInnerWrapper>
      <TableStyled
        columns={columns}
        loading={isLoading}
        dataSource={data?.vacations ?? []}
        pagination={pagination(current, pageSize, data?.totalPages ?? 0)}
        rowKey="id"
        onChange={handleTableChange}
        scroll={{ x: 'fit-content' }}
      />
    </PageContentInnerWrapper>
  );
};

const TableStyled = styled(Table)`
  .ant-table-cell {
    padding: 10px 6px !important;
  }
`;

export default VacationsPageController;
