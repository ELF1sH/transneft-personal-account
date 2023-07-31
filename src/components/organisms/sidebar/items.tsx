import { downloadLinks } from 'constants/routes';

import React from 'react';
import { MenuProps } from 'antd';
import { Link } from 'react-router-dom';
import { DownloadOutlined } from '@ant-design/icons';

import { getRouteItemLabel } from 'utils/routes/getRouteLabels';
import { RouteItem } from 'utils/interfaces/routes';
import { getRoute } from 'utils/routes/getRoute';

const getChildren = (routeItems: RouteItem[]): MenuProps['items'] => routeItems.map((item) => ({
  key: item,
  label: (
    <Link to={getRoute(item)} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      {getRouteItemLabel(item)}
      {
        Object.keys(downloadLinks).includes(item)
          ? (
            <span style={{ whiteSpace: 'nowrap' }}>
              &nbsp;
              (
              <DownloadOutlined />
              )
            </span>
          )
          : null
      }
    </Link>
  ),
}));

export const items: MenuProps['items'] = [
  {
    key: 'personnelAccounting',
    label: 'Кадровый учет',
    children: getChildren([
      RouteItem.VACATIONS,
      RouteItem.MEDICAL_CHECKUP,
      RouteItem.EDUCATION,
    ]),
  },
  ...getChildren([RouteItem.INVENTORY_CONTROL])!,
  {
    key: 'laborOrganisation',
    label: 'Организация труда',
    children: getChildren([
      RouteItem.WORKING_HOURS,
      RouteItem.WORKING_SCHEDULE,
    ]),
  },
  {
    key: 'paperwork',
    label: 'Оформление документов',
    children: getChildren([
      RouteItem.REDUCED_FARE,
      RouteItem.INCOME_TAX,
      RouteItem.BIRTH_PENSION,
      RouteItem.TAX_DEDUCTION,
      RouteItem.RENTAL,
      RouteItem.KINDERGARTEN,
      RouteItem.SANATORIUM,
      RouteItem.VACATION_APPLICATIONS,
      RouteItem.ENQUIRY,
      RouteItem.WORK_BOOK_COPY,
    ]),
  },
  ...getChildren([RouteItem.PHONEBOOK])!,
];
