import React from 'react';
import { Result } from 'antd';
import { AxiosError } from 'axios';

import { Spin } from 'components/atoms/spin/Spin';

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
    if (isLoading) return <Spin size="large" />;

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
              subTitle="Данные не существуют"
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

export default WithLoader;
