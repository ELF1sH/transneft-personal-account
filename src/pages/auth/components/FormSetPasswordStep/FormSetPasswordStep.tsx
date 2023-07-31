import React from 'react';
import {
  Button, Form, Input, Typography,
} from 'antd';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'antd/es/form/Form';
import { useMutation } from '@tanstack/react-query';

import Space from 'components/atoms/space/Space';

import { tokenRepository } from 'domain/repositories/cookies/TokenRepository';
import { authRepository } from 'domain/repositories/api/AuthRepository';

import { getRoute } from 'utils/routes/getRoute';
import { RouteItem } from 'utils/interfaces/routes';

import { IFormState } from './interfaces';

const { Paragraph } = Typography;

const FormSetPasswordStep: React.FC = () => {
  const navigate = useNavigate();
  const employeeId = tokenRepository.getEmployeeId();
  const [form] = useForm();

  const { mutate, isLoading } = useMutation({
    mutationFn: authRepository.password,
    onSuccess: ({ accessToken, refreshToken }) => {
      tokenRepository.init(accessToken, refreshToken);

      navigate(getRoute(RouteItem.PROFILE));
    },
  });

  const onSubmit = ({ password }: IFormState) => {
    mutate({
      password,
      employeeId: +employeeId!,
    });
  };

  return (
    <Form<IFormState> form={form} onFinish={onSubmit} style={{ width: '100%' }}>
      <Space $direction="vertical" $gap={16}>
        <Paragraph type="secondary">Необходимо установить пароль для вашего аккаунта. Введите пароль для входа в личный кабинет.</Paragraph>

        <Form.Item
          name="password"
          rules={[
            { required: true, message: 'Не указан пароль' },
            { min: 8, message: 'Минимум 8 символов' },
          ]}
        >
          <Input.Password placeholder="Пароль" size="large" autoFocus />
        </Form.Item>

        <Form.Item
          name="passwordConfirmation"
          rules={[
            {
              required: true,
              message: 'Подтвердите пароль',
            },
            {
              message: 'Пароли не совпадают',
              validator: (object, value) => {
                const { password } = form.getFieldsValue();
                return password === value ? Promise.resolve() : Promise.reject();
              },
            },
            { min: 8, message: 'Минимум 8 символов' },
          ]}
        >
          <Input.Password placeholder="Подтвердите пароль" size="large" />
        </Form.Item>

        <Button loading={isLoading} htmlType="submit" type="primary" size="large" block>Войти</Button>
      </Space>
    </Form>
  );
};

export default FormSetPasswordStep;
