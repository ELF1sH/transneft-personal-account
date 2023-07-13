import { pagination } from 'constants/tables/pagination';

import React from 'react';
import { Table } from 'antd';

import PageContentInnerWrapper from 'components/wrappers/pageContentInnerWrapper/PageContentInnerWrapper';

import { IEducation } from 'domain/entities/education';

import { useColumns } from 'pages/education/hooks/useColumns';

const dataSource: IEducation[] = [
  {
    educationCenter: 'Запсиб энерго',
    city: 'Тюмень',
    courseName: 'Охрана труда и промышленная безопасность',
    educationPeriod: '03.07.2023 - 07.07.2023',
  },
  {
    educationCenter: 'ТНПК',
    city: 'Тюмень',
    courseName: 'Огневые и газоопасные работы на объектах ТЭК',
    educationPeriod: '11.12.2023 - 15.12.2023',
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
        rowKey="educationCenter"
        scroll={{ x: 'fit-content' }}
      />
    </PageContentInnerWrapper>
  );
};

export default EducationPage;
