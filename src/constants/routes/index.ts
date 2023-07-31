import { RouteItem, RouteSection } from 'utils/interfaces/routes';

export const routePaths: Record<RouteItem, (RouteItem | RouteSection)[]> = {
  [RouteItem.BASE]: [],
  [RouteItem.PROFILE]: [],
  [RouteItem.QR]: [],

  [RouteItem.VACATIONS]: [RouteItem.PROFILE, RouteSection.PERSONNEL_ACCOUNTING],
  [RouteItem.MEDICAL_CHECKUP]: [RouteItem.PROFILE, RouteSection.PERSONNEL_ACCOUNTING],
  [RouteItem.EDUCATION]: [RouteItem.PROFILE, RouteSection.PERSONNEL_ACCOUNTING],

  [RouteItem.INVENTORY_CONTROL]: [RouteItem.PROFILE],

  [RouteItem.WORKING_HOURS]: [RouteItem.PROFILE, RouteSection.LABOR_ORGANISATION],
  [RouteItem.WORKING_SCHEDULE]: [RouteItem.PROFILE, RouteSection.LABOR_ORGANISATION],

  [RouteItem.REDUCED_FARE]: [RouteItem.PROFILE, RouteSection.PAPERWORK],
  [RouteItem.INCOME_TAX]: [RouteItem.PROFILE, RouteSection.PAPERWORK],
  [RouteItem.BIRTH_PENSION]: [RouteItem.PROFILE, RouteSection.PAPERWORK],
  [RouteItem.TAX_DEDUCTION]: [RouteItem.PROFILE, RouteSection.PAPERWORK],
  [RouteItem.RENTAL]: [RouteItem.PROFILE, RouteSection.PAPERWORK],
  [RouteItem.KINDERGARTEN]: [RouteItem.PROFILE, RouteSection.PAPERWORK],
  [RouteItem.SANATORIUM]: [RouteItem.PROFILE, RouteSection.PAPERWORK],
  [RouteItem.VACATION_APPLICATIONS]: [RouteItem.PROFILE, RouteSection.PAPERWORK],
  [RouteItem.ENQUIRY]: [RouteItem.PROFILE, RouteSection.PAPERWORK],
  [RouteItem.WORK_BOOK_COPY]: [RouteItem.PROFILE, RouteSection.PAPERWORK],

  [RouteItem.PHONEBOOK]: [RouteItem.PROFILE],
};

export const downloadLinks: Partial<Record<RouteItem, string>> = {
  [RouteItem.REDUCED_FARE]: 'http://files.lk-transneft.ru/downloadFile?id=KDc6JZ4hzX9YwnJ',
  [RouteItem.INCOME_TAX]: 'http://files.lk-transneft.ru/downloadFile?id=C5VorF91kgcyYHQ',
  [RouteItem.BIRTH_PENSION]: 'http://files.lk-transneft.ru/downloadFile?id=NWmTRvmN0bljGJm',
  [RouteItem.RENTAL]: 'http://files.lk-transneft.ru/downloadFile?id=PTpUWJfjfuo9NiO',
  [RouteItem.ENQUIRY]: 'http://files.lk-transneft.ru/downloadFile?id=AHmv7lAzT3Pvip6',
  [RouteItem.WORK_BOOK_COPY]: 'http://files.lk-transneft.ru/downloadFile?id=zOUZmErzyA3sbdj',
};
