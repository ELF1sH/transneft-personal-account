import React from 'react';
import { Button, Typography } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

import vacationNotification from 'assets/documents/vacationNotification.pdf';

import Space from 'components/atoms/space/Space';

const { Title } = Typography;

const DocumentPage: React.FC = () => (
  <>
    <Title level={4}>Уведомление о сроках отпуска</Title>
    <object width="100%" height="800px" data={vacationNotification} type="application/pdf" aria-label="Заявление на перенос отпуска" />
    <Space $justifyContent="end" $gap={12} $margin="12px 0 0 0" $wrap>
      <Button size="large">Заявление на перенос отпуска</Button>
      <Button size="large" type="primary" icon={<CheckCircleOutlined />}>Ознакомлен</Button>
    </Space>
  </>
);

export default DocumentPage;
