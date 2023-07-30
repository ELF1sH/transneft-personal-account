import React from 'react';
import { Typography } from 'antd';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { QRCodeSVG } from 'qrcode.react';

import { Spin } from 'components/atoms/spin/Spin';

import { usersRepository } from 'domain/repositories/api/UsersRepository';
import { tokenRepository } from 'domain/repositories/cookies/TokenRepository';

const QrCode: React.FC = () => {
  const userId = tokenRepository.getUserId();

  const { data, isLoading } = useQuery(['qr-code'], {
    queryFn: () => usersRepository.getQrCode({ userId: userId! }),
  });

  return (
    <div>
      <TitleWrapper>
        <Typography.Text>QR-код</Typography.Text>
      </TitleWrapper>
      <QrCodeWrapper>
        {
          isLoading
            ? <Spin />
            : <Qr value={data?.url!} />
        }
      </QrCodeWrapper>
    </div>
  );
};

const TitleWrapper = styled.div`
  background-color: #fff;
  padding: 8px 16px;
  font-weight: bold;
`;

const QrCodeWrapper = styled.div`
  width: 175px;
  height: 175px;
`;

const Qr = styled(QRCodeSVG)`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

export default QrCode;
