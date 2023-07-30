import axios from 'axios';
import { router } from 'index';

import { tokenRepository } from 'domain/repositories/cookies/TokenRepository';
import { IAuthResponse } from 'domain/entities/auth';

import { getRoute } from 'utils/routes/getRoute';
import { RouteItem } from 'utils/interfaces/routes';

import { authRepository } from './AuthRepository';

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const authURLS = ['auth/login', 'auth/refresh', 'auth/password', 'auth/login/qr-code'];

axiosInstance.interceptors.request.use(
  (cfg) => {
    if (!authURLS.includes(cfg.url ?? '') && !tokenRepository.getRefreshToken()) {
      tokenRepository.reset();
      router.navigate(getRoute(RouteItem.BASE));
    }

    if (cfg.url === 'auth/refresh') {
      const refreshToken = tokenRepository.getRefreshToken();

      if (refreshToken) cfg.headers.Authorization = `Bearer ${refreshToken}`;

      return cfg;
    }

    const accessToken = tokenRepository.getAccessToken();
    if (accessToken) cfg.headers.Authorization = `Bearer ${accessToken}`;

    return cfg;
  },
  (error) => Promise.reject(error),
);

let promiseOfGettingNewRefreshToken: Promise<IAuthResponse> | null = null;

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401
      && !authURLS.includes(originalRequest.url)
      && !originalRequest._retry
    ) {
      if (!promiseOfGettingNewRefreshToken) {
        originalRequest._retry = true;

        promiseOfGettingNewRefreshToken = authRepository.refresh().then((response) => {
          tokenRepository.init(response.accessToken, response.refreshToken);

          promiseOfGettingNewRefreshToken = null;
          return response;
        });
      }

      return promiseOfGettingNewRefreshToken.then(() => {
        axiosInstance(originalRequest);
      });
    }

    if (error.response?.status === 401
      && originalRequest.url === 'auth/refresh') {
      tokenRepository.reset();

      router.navigate(getRoute(RouteItem.BASE));
    }

    return Promise.reject(error);
  },
);
