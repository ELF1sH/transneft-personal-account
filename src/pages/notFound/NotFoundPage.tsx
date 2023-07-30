import React from 'react';
import { Button, Result } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

import Space from 'components/atoms/space/Space';

import { getRoute } from 'utils/routes/getRoute';
import { RouteItem } from 'utils/interfaces/routes';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Space $direction="vertical" $alignItems="center">
      <Result
        status="404"
        title="Страница не найдена"
      />
      <Link to="/">
        <Button type="primary" size="large" onClick={() => navigate(getRoute(RouteItem.PROFILE))}>На главную</Button>
      </Link>
    </Space>
  );
};

export default NotFoundPage;
