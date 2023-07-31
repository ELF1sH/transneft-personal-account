import React from 'react';
import { ColumnsType } from 'antd/es/table';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

export interface IRowDocumentsTable {
  name: string;
  link: string;
}

export const useColumnsDocumentsTable = () => {
  const columns: ColumnsType<IRowDocumentsTable> = [
    {
      title: 'Название документа',
      key: 'name',
      dataIndex: 'name',
    },
    {
      title: 'Действия',
      key: 'link',
      dataIndex: 'link',
      width: '0px',
      align: 'center',
      render: (value) => <Button icon={<DownloadOutlined />} href={value}>Скачать</Button>,
    },
  ];

  return columns;
};
