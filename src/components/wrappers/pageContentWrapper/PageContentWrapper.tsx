import React from 'react';
// @ts-ignore
import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';

import { PageBackground } from 'components/atoms/pageBackground/PageBackgrond';

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
    padding: 20px 24px;
    flex-grow: 1;
    
    @media (max-width: 1100px) {
      padding: 5px 6px;
    }
  `};
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
`;

export default PageContent;
