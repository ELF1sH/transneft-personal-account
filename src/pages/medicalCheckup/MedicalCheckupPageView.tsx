import { pagination } from 'constants/tables/pagination';

import React from 'react';
import { Table } from 'antd';

import PageContentInnerWrapper from 'components/wrappers/pageContentInnerWrapper/PageContentInnerWrapper';

import { IMedicalCheckup } from 'domain/entities/medicalCheckup';

import { useColumns } from 'pages/medicalCheckup/hooks/useColumns';

const dataSource: IMedicalCheckup[] = [
  {
    type: 'Медицинский осмотр',
    date: '06.10.2022',
    number: '563/29',
  },
  {
    type: 'Психиатрическое освидетельствование',
    date: '12.01.2023',
    number: '418',
  },
];

const MedicalCheckupPageView: React.FC = () => {
  const columns = useColumns();

  return (
    <PageContentInnerWrapper>
      <Table
        columns={columns}
        dataSource={dataSource}
        bordered
        pagination={pagination}
        rowKey="type"
        scroll={{ x: 'fit-content' }}
      />
    </PageContentInnerWrapper>
  );
};

export default MedicalCheckupPageView;
