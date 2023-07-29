import axios from 'axios';
import { router } from 'index';

import { tokenRepository } from 'domain/repositories/cookies/TokenRepository';

import { getRoute } from 'utils/routes/getRoute';
import { RouteItem } from 'utils/interfaces/routes';

import { authRepository } from './AuthRepository';

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

axiosInstance.interceptors.request.use(
  (cfg) => {
    const config = cfg;

    if (!tokenRepository.getUserId()
      || !tokenRepository.getRefreshToken()
      || !tokenRepository.getAccessToken()
    ) {
      router.navigate(getRoute(RouteItem.BASE));
    }

    if (config.url === 'auth/refresh') {
      const refreshToken = tokenRepository.getRefreshToken();

      if (refreshToken) config.headers.Authorization = `Bearer ${refreshToken}`;

      return config;
    }

    const accessToken = tokenRepository.getAccessToken();
    if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;

    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && originalRequest.url !== '/auth/login'
      && !originalRequest._retry && originalRequest.url !== 'auth/refresh'
    ) {
      originalRequest._retry = true;

      const result = await authRepository.refresh();

      if (result) {
        tokenRepository.init(result.accessToken, result.refreshToken);
      }

      return axiosInstance(originalRequest);
    }

    if (originalRequest.url === 'auth/refresh') {
      tokenRepository.reset();

      router.navigate(getRoute(RouteItem.BASE));
    }

    return Promise.reject(error);
  },
);
