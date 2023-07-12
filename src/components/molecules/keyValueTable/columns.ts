import { ColumnsType } from 'antd/es/table';
import { colors } from 'theme/colors';

export const columns: ColumnsType<any> = [
  {
    dataIndex: 'title',
    key: 'title',
    width: '50%',
    onCell: () => ({
      style: { background: colors.COLOR_BG_HIGHLIGHT_CELL, fontWeight: 'bold' },
    }),
  },
  {
    dataIndex: 'value',
    key: 'value',
    width: '50%',
    onCell: () => ({
      style: { wordBreak: 'break-word' },
    }),
  },
];
