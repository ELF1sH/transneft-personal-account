import React from 'react';

import { StyledLink, StyledRouterLink } from 'components/atoms/link/styled';

interface LinkProps {
  children: React.ReactNode;
  href?: string;
  to?: string;
  className?: string;
  underline?: boolean;
}

const Link: React.FC<LinkProps> = ({
  children,
  href,
  to,
  className = '',
  underline = false,
}) => (
  to ? (
    <StyledRouterLink to={to} className={className} $underline={underline}>
      {children}
    </StyledRouterLink>
  ) : (
    <StyledLink href={href} className={className} $underline={underline}>
      <div>
        {children}
      </div>
    </StyledLink>
  )
);

export default Link;
