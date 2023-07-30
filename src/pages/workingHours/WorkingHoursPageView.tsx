import React from 'react';
import { Typography } from 'antd';

import PageContentInnerWrapper from 'components/wrappers/pageContentInnerWrapper/PageContentInnerWrapper';

import { IShift } from 'domain/entities/shift';

const { Paragraph } = Typography;

export interface WorkingHoursPageViewProps {
  shifts: IShift[];
}

const WorkingHoursPageView: React.FC<WorkingHoursPageViewProps> = ({ shifts }) => (
  <PageContentInnerWrapper>
    <Paragraph>
      <ol>
        {
          shifts.map(({ id, description }) => (
            <li key={id}>{description}</li>
          ))
        }
      </ol>
    </Paragraph>
  </PageContentInnerWrapper>
);

export default WorkingHoursPageView;
