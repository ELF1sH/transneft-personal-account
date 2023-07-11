import React from 'react';
import { Typography } from 'antd';
import styled from 'styled-components';

const QrCode: React.FC = () => (
  <div>
    <TitleWrapper>
      <Typography.Text>QR-код</Typography.Text>
    </TitleWrapper>
    <QrCodeWrapper>
      <Qr src="https://fakeimg.pl/400x400" alt="" />
    </QrCodeWrapper>
  </div>
);

const TitleWrapper = styled.div`
  background-color: #fff;
  padding: 8px 16px;
  font-weight: bold;
`;

const QrCodeWrapper = styled.div`
  width: 175px;
  height: 175px;
`;

const Qr = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

export default QrCode;
