import { TablePaginationConfig } from 'antd/lib';

export const pagination = (
  current: number,
  pageSize: number,
  totalPages: number,
): TablePaginationConfig => ({
  current,
  pageSize,
  total: totalPages * pageSize,
  responsive: false,
  showSizeChanger: true,
  pageSizeOptions: ['10', '20', '30', '50'],
  locale: { items_per_page: 'на странице' },
});
