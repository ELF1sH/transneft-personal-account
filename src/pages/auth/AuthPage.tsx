import React, { useState } from 'react';
import { Typography } from 'antd';

import logo from 'assets/logo.svg';

import { PageBackground } from 'components/atoms/pageBackground/PageBackgrond';

import { AuthPageWrapper, FormWrapper } from './styled';
import FormPersonnelNumberStep from './components/FormPersonnelNumberStep/FormPersonnelNumberStep';
import FormPasswordStep from './components/FormPasswordStep/FormPasswordStep';
import { AuthStep } from './interfaces';
import FormSetPasswordStep from './components/FormSetPasswordStep/FormSetPasswordStep';

const { Title } = Typography;

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
            ? <FormPersonnelNumberStep setCurrentStep={setCurrentStep} />
            : currentStep === AuthStep.SET_PASSWORD
              ? <FormSetPasswordStep />
              : <FormPasswordStep />
        }
      </FormWrapper>
    </AuthPageWrapper>
  );
};

export default AuthPage;
