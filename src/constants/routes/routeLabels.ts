import { RouteItem, RouteSection } from 'utils/interfaces/routes';

export const routeSectionsLabels: Record<RouteSection, string> = {
  [RouteSection.PERSONNEL_ACCOUNTING]: 'Кадровый учет',
  [RouteSection.LABOR_ORGANISATION]: 'Организация труда',
  [RouteSection.PAPERWORK]: 'Оформление документов',
};

export const routeItemsLabels: Record<RouteItem, string> = {
  [RouteItem.BASE]: 'Главная',
  [RouteItem.PROFILE]: 'Личный кабинет',
  [RouteItem.QR]: 'Qr',

  [RouteItem.VACATIONS]: 'Отпуска',
  [RouteItem.MEDICAL_CHECKUP]: 'Медицинский осмотр и психиатрическое освидетельствование',
  [RouteItem.EDUCATION]: 'Планируемое обучение',

  [RouteItem.INVENTORY_CONTROL]: 'Складской учет',

  [RouteItem.WORKING_HOURS]: 'Режим работы',
  [RouteItem.WORKING_SCHEDULE]: 'Графики работы',

  [RouteItem.REDUCED_FARE]: 'Льготный проезд',
  [RouteItem.INCOME_TAX]: 'НДФЛ',
  [RouteItem.BIRTH_PENSION]: 'Единовременное пособие по рождению ребенка',
  [RouteItem.TAX_DEDUCTION]: 'Налоговый вычет',
  [RouteItem.RENTAL]: 'Аренда жилья',
  [RouteItem.KINDERGARTEN]: 'Детский сад',
  [RouteItem.SANATORIUM]: 'Санаторий',
  [RouteItem.VACATION_APPLICATIONS]: 'Заявления на отпуска',
  [RouteItem.ENQUIRY]: 'Справка с места работы',
  [RouteItem.WORK_BOOK_COPY]: 'Копия трудовой книжки',

  [RouteItem.PHONEBOOK]: 'Телефонный справочник',
};
