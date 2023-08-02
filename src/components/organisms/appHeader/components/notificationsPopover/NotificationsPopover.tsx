import React, { useState } from 'react';
import { Badge, Popover } from 'antd';
import { BellOutlined } from '@ant-design/icons';

import { IconButton } from 'components/atoms/iconButton/IconButton';

import Notification from './Notification';

const NotificationsPopover: React.FC = () => {
  const [open, setIsOpen] = useState(false);

  return (
    <Popover
      placement="bottom"
      title="Уведомления"
      content={<Notification close={() => setIsOpen(false)} />}
      trigger="click"
      open={open}
      onOpenChange={(newOpen) => setIsOpen(newOpen)}
    >
      <Badge count={1} size="small" offset={[-3, 3]}>
        <IconButton icon={<BellOutlined />} type="default" />
      </Badge>
    </Popover>
  );
};

export default NotificationsPopover;
