// @ts-ignore
import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import { Link } from 'react-router-dom';

interface LinkProps {
  $underline: boolean;
}

const linkStyles = ({ theme, $underline }: ThemeProps<DefaultTheme> & LinkProps) => css`
  cursor: pointer;
  
  color: ${theme.colorText};
  transition: color .2s;
  position: relative;
  
  text-decoration: ${$underline ? 'underline' : 'none'};

  &:hover {
    color: ${theme.colorLinkHover};
  }
  &:active {
    color: ${theme.colorPrimary};
  }

  >* {
    transition: color .2s, background-color .2s;
    &:hover {
      color: ${theme.colorLinkHover};
    }
    &:active {
      color: ${theme.colorPrimary};
    }
  }
`;

export const StyledLink = styled.a<ThemeProps<DefaultTheme> & LinkProps>`
  ${({ theme, $underline }) => linkStyles({ theme, $underline })}
`;

export const StyledRouterLink = styled(Link)<ThemeProps<DefaultTheme> & LinkProps>`
  ${({ theme, $underline }) => linkStyles({ theme, $underline })}
`;
