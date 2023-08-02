import React from 'react';
import { Typography } from 'antd';

import PageContentInnerWrapper from 'components/wrappers/pageContentInnerWrapper/PageContentInnerWrapper';

import { EMPLOYEE_ID_SPECIAL_WORKING_HOURS, SPECIAL_WORKING_HOURS_DATA } from 'constants/specialData/workingHours';

import { IShift } from 'domain/entities/shift';
import { tokenRepository } from 'domain/repositories/cookies/TokenRepository';

const { Paragraph } = Typography;

export interface WorkingHoursPageViewProps {
  shifts: IShift[];
}

const WorkingHoursPageView: React.FC<WorkingHoursPageViewProps> = ({ shifts }) => {
  const employeeId = tokenRepository.getEmployeeId();

  return (
    <PageContentInnerWrapper>
      <Paragraph>
        <ol>
          {
            shifts.map(({ id, description }, idx) => (
              idx === 0 && employeeId === EMPLOYEE_ID_SPECIAL_WORKING_HOURS
                ? <li key={id} style={{ whiteSpace: 'pre-wrap' }}>{SPECIAL_WORKING_HOURS_DATA}</li>
                : <li key={id} style={{ whiteSpace: 'pre-wrap' }}>{description}</li>
            ))
          }
        </ol>
      </Paragraph>
    </PageContentInnerWrapper>
  );
};

export default WorkingHoursPageView;
