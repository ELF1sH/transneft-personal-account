import React from 'react';
import { Result, Spin } from 'antd';
import styled from 'styled-components';
import { AxiosError } from 'axios';

interface ComponentWithLoaderProps {
  isLoading: boolean;
  isError?: boolean;
  error?: AxiosError;
}

const WithLoader = <T, >(Component: React.FC<any>) => {
  const ComponentWithLoader: React.FC<ComponentWithLoaderProps & T> = ({
    isLoading = true,
    isError = false,
    error,
    ...props
  }) => {
    if (isLoading) return <SpinStyled size="large" />;

    if (isError) {
      if (error && error.response) {
        const { status } = error.response;

        if (status === 403) {
          return (
            <Result
              status="403"
              title="403"
              subTitle="Вы не имеете доступа к этой странице"
            />
          );
        }

        if (status === 404) {
          return (
            <Result
              status="404"
              title="404"
              subTitle="Данная страница не существует"
            />
          );
        }

        if (status >= 500) {
          return (
            <Result
              status="500"
              title="500"
              subTitle="Что-то пошло не так"
            />
          );
        }
      }
    }

    return <Component {...props} />;
  };

  return ComponentWithLoader;
};

const SpinStyled = styled(Spin)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50% -50%);
`;

export default WithLoader;
