import styled from 'styled-components';

import pageBackground from 'assets/pageBackground.svg';

export const PageBackground = styled.div`
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
