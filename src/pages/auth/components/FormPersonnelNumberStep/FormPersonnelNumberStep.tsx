import React from 'react';
import {
  Button, Form, Input, Typography,
} from 'antd';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'antd/es/form/Form';

import Space from 'components/atoms/space/Space';

import { usersRepository } from 'domain/repositories/api/UsersRepository';
import { tokenRepository } from 'domain/repositories/cookies/TokenRepository';

import { AuthStep } from 'pages/auth/interfaces';

import { IFormState } from './interfaces';

const { Paragraph } = Typography;

interface FormPersonnelNumberStepProps {
  setCurrentStep: (step: AuthStep) => void;
}

const FormPersonnelNumberStep: React.FC<FormPersonnelNumberStepProps> = ({ setCurrentStep }) => {
  const [form] = useForm();

  const { mutate, isLoading } = useMutation({
    mutationFn: usersRepository.getPasswordStatus,
    onSuccess: ({ id, employeeId, isPasswordSet }) => {
      tokenRepository.setUserId(id);
      tokenRepository.setEmployeeId(employeeId.toString());

      if (isPasswordSet) setCurrentStep(AuthStep.PASSWORD);
      else setCurrentStep(AuthStep.SET_PASSWORD);
    },
    onError: () => {
      form.setFields([{ name: 'employeeId', errors: ['Указан неверный табельный номер'] }]);
    },
  });

  return (
    <Form<IFormState>
      form={form}
      onFinish={(values) => mutate(values)}
      initialValues={{ employeeId: tokenRepository.getEmployeeId() }}
    >
      <Space $direction="vertical" $gap={16}>
        <Paragraph type="secondary" style={{ textAlign: 'center' }}>Введите табельный номер для продолжения входа в личный кабинет.</Paragraph>

        <Form.Item name="employeeId" rules={[{ required: true, message: 'Не указан табельный номер' }]}>
          <Input placeholder="Табельный номер" size="large" autoFocus />
        </Form.Item>

        <Button loading={isLoading} htmlType="submit" type="primary" size="large" block>Продолжить</Button>
      </Space>
    </Form>
  );
};

export default FormPersonnelNumberStep;
