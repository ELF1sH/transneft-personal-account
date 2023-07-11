import { appHeaderHeight } from 'constants/appHeaderHeight';

import styled from 'styled-components';

import imagePlaceholder from 'assets/imagePlaceholder.png';

import Space from 'components/atoms/space/Space';

export const PageHeaderSpace = styled(Space)`
  height: ${appHeaderHeight}px;
  width: 100%;
`;

export const Avatar = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-image: url(${imagePlaceholder});
  background-position: center;
  background-size: cover;
`;
