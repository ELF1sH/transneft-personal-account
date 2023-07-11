import React from 'react';
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

import Space from 'components/atoms/space/Space';

const NotFoundPage: React.FC = () => (
  <Space $direction="vertical" $alignItems="center">
    <Result
      status="404"
      title="Страница не найдена"
    />
    <Link to="/">
      <Button type="primary" size="large">На главную</Button>
    </Link>
  </Space>
);

export default NotFoundPage;
