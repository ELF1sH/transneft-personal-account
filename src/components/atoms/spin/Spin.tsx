import styled from 'styled-components';
import { Spin as SpinAntd } from 'antd';

export const Spin = styled(SpinAntd)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50% -50%);
`;
