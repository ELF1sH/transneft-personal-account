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
