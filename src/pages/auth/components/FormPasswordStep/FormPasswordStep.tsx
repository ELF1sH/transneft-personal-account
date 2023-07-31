import React from 'react';
import {
  Button, Form, Input, Typography,
} from 'antd';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'antd/es/form/Form';
import { AxiosError } from 'axios';

import Space from 'components/atoms/space/Space';

import { tokenRepository } from 'domain/repositories/cookies/TokenRepository';
import { authRepository } from 'domain/repositories/api/AuthRepository';

import { AuthStep } from 'pages/auth/interfaces';

import { RouteItem } from 'utils/interfaces/routes';
import { getRoute } from 'utils/routes/getRoute';

import { IFormState } from './interfaces';

const { Paragraph } = Typography;

interface FormPasswordStepProps {
  setCurrentStep: (step: AuthStep) => void;
}

const FormPasswordStep: React.FC<FormPasswordStepProps> = ({ setCurrentStep }) => {
  const employeeId = tokenRepository.getEmployeeId();
  const navigate = useNavigate();
  const [form] = useForm();

  const { mutate, isLoading } = useMutation({
    mutationFn: authRepository.login,
    onSuccess: ({ accessToken, refreshToken }) => {
      tokenRepository.init(accessToken, refreshToken);

      navigate(getRoute(RouteItem.PROFILE));
    },
    onError: (error: AxiosError) => {
      if (error.response?.status === 400 || error.response?.status === 401) {
        form.setFields([{ name: 'password', errors: ['Указан неверный пароль'] }]);
      }
    },
  });

  const onSubmit = ({ password }: IFormState) => {
    mutate({
      employeeId: +employeeId!,
      password,
    });
  };

  return (
    <Form<IFormState> form={form} onFinish={onSubmit} style={{ width: '100%' }}>
      <Space $direction="vertical" $gap={16}>
        <Paragraph type="secondary">Введите пароль для входа в личный кабинет.</Paragraph>

        <Form.Item
          name="password"
          rules={[
            { required: true, message: 'Не указан пароль' },
            { min: 8, message: 'Минимум 8 символов' },
          ]}
        >
          <Input.Password placeholder="Пароль" size="large" />
        </Form.Item>

        <Button loading={isLoading} htmlType="submit" type="primary" size="large" block>Войти</Button>
      </Space>
    </Form>
  );
};

export default FormPasswordStep;
