import React from 'react';
// @ts-ignore
import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';

import pageBackground from 'assets/pageBackground.svg';

import { IChildren } from 'utils/interfaces/helpers';

const PageContent: React.FC<IChildren> = ({ children }) => (
  <PageContentWrapper>
    <PageBackground />
    <Content>
      {children}
    </Content>
  </PageContentWrapper>
);

const PageContentWrapper = styled.div<ThemeProps<DefaultTheme>>`
  ${({ theme }) => css`
    background-color: ${theme.colorBgLight};
    height: 100%;
    padding: 20px 24px;
    flex-grow: 1;
    
    @media (max-width: 700px) {
      padding: 10px 12px;
    }
  `};
`;

const PageBackground = styled.div`
  background-image: url(${pageBackground});
  background-position: 75px 0;
  background-repeat: no-repeat;
  opacity: 0.4;

  display: block;
  width: 856px;
  height: 552px;

  position: fixed;
  right: 0;
  bottom: 0;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
`;

export default PageContent;
