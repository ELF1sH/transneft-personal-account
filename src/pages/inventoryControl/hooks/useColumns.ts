import { ColumnsType } from 'antd/es/table';

import { IInventoryControlItem } from 'domain/entities/inventoryControlItem';

export const useColumns = (): ColumnsType<IInventoryControlItem> => [
  {
    title: 'Рост',
    key: 'height',
    dataIndex: 'height',
    align: 'center',
  },
  {
    title: 'Размер одежды',
    key: 'clothingSize',
    dataIndex: 'clothingSize',
    align: 'center',
  },
  {
    title: 'Размер ноги',
    key: 'footSize',
    dataIndex: 'footSize',
    align: 'center',
  },
  {
    title: 'Размер головы',
    key: 'headSize',
    dataIndex: 'headSize',
    align: 'center',
  },
];
