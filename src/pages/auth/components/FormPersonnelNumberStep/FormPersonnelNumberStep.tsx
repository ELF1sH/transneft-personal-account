import React from 'react';
import {
  Button, Form, Input, Typography,
} from 'antd';

const { Paragraph } = Typography;

interface FormPersonnelNumberStepProps {
  toNextStep: () => void;
}

const FormPersonnelNumberStep: React.FC<FormPersonnelNumberStepProps> = ({ toNextStep }) => {
  const onSubmit = () => {
    toNextStep();
  };

  return (
    <Form onFinish={onSubmit}>
      <Paragraph type="secondary">Введите табельный номер для продолжения входа в личный кабинет.</Paragraph>

      <Form.Item>
        <Input placeholder="Табельный номер" size="large" />
      </Form.Item>

      <Button htmlType="submit" type="primary" size="large" block>Продолжить</Button>
    </Form>
  );
};

export default FormPersonnelNumberStep;
