import React from 'react';

import PageContentInnerWrapper from 'components/wrappers/pageContentInnerWrapper/PageContentInnerWrapper';
import Table from 'components/molecules/table/Table';

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
