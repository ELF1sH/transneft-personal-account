import React from 'react';
import { InfoCircleFilled } from '@ant-design/icons';
import { colors } from 'theme/colors';
import { Typography } from 'antd';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Space from 'components/atoms/space/Space';

import { RouteItem } from 'utils/interfaces/routes';
import { getRoute } from 'utils/routes/getRoute';

const { Text } = Typography;

interface NotificationProps {
  close: () => void;
}

const Notification: React.FC<NotificationProps> = ({ close }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(getRoute(RouteItem.DOCUMENT));
    close();
  };

  return (
    <NotificationWrapper onClick={handleClick}>
      <Space $gap={6}>
        <InfoCircleFilled style={{ color: colors.COLOR_PRIMARY, height: 'fit-content', marginTop: '4px' }} />
        <Space $direction="vertical">
          <Text strong>Необходимо ознакомиться с документом</Text>
          <Text>&quot;Уведомление о сроках отпуска&quot;</Text>
        </Space>
      </Space>
    </NotificationWrapper>
  );
};

export const NotificationWrapper = styled.div`
  transition: .2s background;
  margin : -6px -12px 0 -12px;
  padding: 6px 12px;
  
  cursor: pointer;
  
  &:hover {
    background-color: #F3F3F3;
  }
`;

export default Notification;
