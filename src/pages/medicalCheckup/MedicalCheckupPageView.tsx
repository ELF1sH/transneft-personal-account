import React from 'react';

import PageContentInnerWrapper from 'components/wrappers/pageContentInnerWrapper/PageContentInnerWrapper';
import Table from 'components/molecules/table/Table';

import { IMedicalCheckup } from 'domain/entities/medicalCheckup';

import { useColumns } from './hooks/useColumns';

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
        rowKey="id"
        scroll={{ x: 'fit-content' }}
      />
    </PageContentInnerWrapper>
  );
};

export default MedicalCheckupPageView;
