import React, { useState } from 'react';
import { Typography } from 'antd';

import logo from 'assets/logo.svg';

import { PageBackground } from 'components/atoms/pageBackground/PageBackgrond';

import { AuthPageWrapper, FormWrapper } from './styled';
import FormPersonnelNumberStep from './components/FormPersonnelNumberStep/FormPersonnelNumberStep';
import FormPasswordStep from './components/FormPasswordStep/FormPasswordStep';
import { AuthStep } from './interfaces';

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
