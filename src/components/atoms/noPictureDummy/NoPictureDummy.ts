// @ts-ignore
import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';

interface NoPictureDummyProps {
  fontSize: string;
}

export const NoPictureDummy = styled.div<ThemeProps<DefaultTheme> & NoPictureDummyProps>`
  ${({ theme, fontSize }) => css`
    height: 100%;
    background-color: ${theme['gray-5']};
    position: relative;
    &::after {
      content: '?';
      font-size: ${fontSize};
      color: ${theme['gray-6']};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  `};
`;
