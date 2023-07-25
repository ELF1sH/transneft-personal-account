import React, { useState } from 'react';
import { Typography } from 'antd';

import logo from 'assets/logo.svg';

import { PageBackground } from 'components/atoms/pageBackground/PageBackgrond';

import FormPasswordStep from 'pages/auth/components/FormPasswordStep/FormPasswordStep';
import { AuthStep } from 'pages/auth/interfaces';
import { AuthPageWrapper, FormWrapper } from 'pages/auth/styled';
import FormPersonnelNumberStep from 'pages/auth/components/FormPersonnelNumberStep/FormPersonnelNumberStep';

const { Title, Paragraph } = Typography;

const AuthPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<AuthStep>(AuthStep.PERSONNEL_NUMBER);

  return (
    <AuthPageWrapper>
      <PageBackground />
      <FormWrapper>
        <img src={logo} alt="logo" draggable={false} />
        <Title level={4}>Вход в личный кабинет</Title>
        {
          currentStep === AuthStep.PERSONNEL_NUMBER
            ? <FormPersonnelNumberStep toNextStep={() => setCurrentStep(AuthStep.PASSWORD)} />
            : <FormPasswordStep />
        }
      </FormWrapper>
    </AuthPageWrapper>
  );
};

export default AuthPage;
