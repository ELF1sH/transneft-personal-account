import { pagination } from 'constants/tables/pagination';

import React from 'react';
import { Table } from 'antd';

import PageContentInnerWrapper from 'components/wrappers/pageContentInnerWrapper/PageContentInnerWrapper';

import { IEducation } from 'domain/entities/education';

import { useColumns } from './hooks/useColumns';

const dataSource: IEducation[] = [
  {
    id: '112',
    educationCenter: 'Запсиб энерго',
    city: 'Тюмень',
    courseName: 'Охрана труда и промышленная безопасность',
    startDate: '03.07.2023',
    endDate: '07.07.2023',
  },
  {
    id: '113',
    educationCenter: 'ТНПК',
    city: 'Тюмень',
    courseName: 'Огневые и газоопасные работы на объектах ТЭК',
    startDate: '03.07.2023',
    endDate: '07.07.2023',
  },
];

const EducationPage: React.FC = () => {
  const columns = useColumns();

  return (
    <PageContentInnerWrapper>
      <Table
        columns={columns}
        dataSource={dataSource}
        bordered
        pagination={pagination}
        rowKey="id"
        scroll={{ x: 'fit-content' }}
      />
    </PageContentInnerWrapper>
  );
};

export default EducationPage;
