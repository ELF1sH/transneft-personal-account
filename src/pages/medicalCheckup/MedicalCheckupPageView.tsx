import React from 'react';
import { Table } from 'antd';

import PageContentInnerWrapper from 'components/wrappers/pageContentInnerWrapper/PageContentInnerWrapper';

import { IMedicalCheckup } from 'domain/entities/medicalCheckup';

import { useColumns } from './hooks/useColumns';

const dataSource: IMedicalCheckup[] = [
  {
    id: '123',
    type: 'Медицинский осмотр',
    date: '06.10.2022',
    certificate: '563/29',
  },
  {
    id: '124',
    type: 'Психиатрическое освидетельствование',
    date: '12.01.2023',
    certificate: '418',
  },
];

export interface MedicalCheckupPageViewProps {
  medicalCheckups: IMedicalCheckup[];
}

const MedicalCheckupPageView: React.FC<MedicalCheckupPageViewProps> = ({ medicalCheckups }) => {
  const columns = useColumns();

  return (
    <PageContentInnerWrapper>
      <Table
        columns={columns}
        dataSource={medicalCheckups}
        bordered
        pagination={false}
        rowKey="id"
        scroll={{ x: 'fit-content' }}
      />
    </PageContentInnerWrapper>
  );
};

export default MedicalCheckupPageView;
