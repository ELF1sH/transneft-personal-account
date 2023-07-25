import React from 'react';
import { Typography } from 'antd';

import PageContentInnerWrapper from 'components/wrappers/pageContentInnerWrapper/PageContentInnerWrapper';

const { Paragraph } = Typography;

const WorkingHoursPage: React.FC = () => (
  <PageContentInnerWrapper>
    <Paragraph>
      <ol>
        <li>Суммированный учет рабочего времени с отчетным периодом 1 квартал</li>
        <li>
          Режим работы филиала «Нижневартовское УМН»
          <br />
          с 8:00 до 17:00
          <br />
          Перерыв с 10:00 до 10:15
          <br />
          Обед с 12:30 до 13:30
          <br />
          Перерыв с 15:00 до 15:15
        </li>
      </ol>
    </Paragraph>
  </PageContentInnerWrapper>
);

export default WorkingHoursPage;
