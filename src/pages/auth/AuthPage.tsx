import React, { useState } from 'react';
import { Typography } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

import logo from 'assets/logo.svg';

import { PageBackground } from 'components/atoms/pageBackground/PageBackgrond';

import { AuthPageWrapper, FormWrapper, GoBackButton } from './styled';
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
        {
          (currentStep === AuthStep.PASSWORD || currentStep === AuthStep.SET_PASSWORD) && (
            <GoBackButton
              icon={<ArrowLeftOutlined style={{ transform: 'translateX(8px)' }} />}
              shape="circle"
              onClick={() => setCurrentStep(AuthStep.PERSONNEL_NUMBER)}
            />
          )
        }
        <img src={logo} alt="logo" draggable={false} />
        <Title level={4}>Вход в личный кабинет</Title>
        {
          currentStep === AuthStep.PERSONNEL_NUMBER
            ? <FormPersonnelNumberStep setCurrentStep={setCurrentStep} />
            : currentStep === AuthStep.SET_PASSWORD
              ? <FormSetPasswordStep />
              : <FormPasswordStep setCurrentStep={setCurrentStep} />
        }
      </FormWrapper>
    </AuthPageWrapper>
  );
};

export default AuthPage;
