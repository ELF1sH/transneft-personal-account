import { SelectProps, TabsProps } from 'antd';

export const tabItemsToSelectOptions = (items: TabsProps['items']): SelectProps['options'] => items?.map((item) => ({
  value: item.key,
  label: item.label,
}));
