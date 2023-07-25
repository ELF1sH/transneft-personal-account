import React from 'react';
import {
  Button, Form, Input, Typography,
} from 'antd';
import { useNavigate } from 'react-router-dom';

import { getRoute } from 'utils/routes/getRoute';
import { RouteItem } from 'utils/interfaces/routes';

const { Paragraph } = Typography;

const FormPasswordStep: React.FC = () => {
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate(getRoute(RouteItem.PROFILE));
  };

  return (
    <Form onFinish={onSubmit} style={{ width: '100%' }}>
      <Paragraph type="secondary">Введите пароль для входа в личный кабинет.</Paragraph>

      <Form.Item>
        <Input.Password placeholder="Пароль" size="large" />
      </Form.Item>

      <Button htmlType="submit" type="primary" size="large" block>Войти</Button>
    </Form>
  );
};

export default FormPasswordStep;
