import { appHeaderHeight } from 'constants/appHeaderHeight';

import styled from 'styled-components';

import Space from 'components/atoms/space/Space';

export const PageHeaderSpace = styled(Space)`
  height: ${appHeaderHeight}px;
  width: 100%;
`;

export const AvatarWrapper = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  overflow: hidden;
`;

export const Avatar = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
`;
