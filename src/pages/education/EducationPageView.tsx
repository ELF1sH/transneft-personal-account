import React from 'react';

import PageContentInnerWrapper from 'components/wrappers/pageContentInnerWrapper/PageContentInnerWrapper';
import Table from 'components/molecules/table/Table';

import { IEducation } from 'domain/entities/education';

import { useColumns } from './hooks/useColumns';

export interface EducationPageViewProps {
  educations: IEducation[];
}

const EducationPageView: React.FC<EducationPageViewProps> = ({ educations }) => {
  const columns = useColumns();

  return (
    <PageContentInnerWrapper>
      <Table
        columns={columns}
        dataSource={educations}
        rowKey="id"
        scroll={{ x: 'fit-content' }}
      />
    </PageContentInnerWrapper>
  );
};

export default EducationPageView;
