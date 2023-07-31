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

  [RouteItem.REDUCED_FARE]: 'Перечень документов для компенсации расходов стоимости проезда к месту проведения отдыха и обратно',
  [RouteItem.INCOME_TAX]: 'Заявление на выдачу справки 2-НДФЛ',
  [RouteItem.BIRTH_PENSION]: 'Заявление на материальную помощь в связи с рождением/усыновлением/установлением опеки или попечительства ребенка',
  [RouteItem.TAX_DEDUCTION]: 'Налоговый вычет',
  [RouteItem.RENTAL]: 'Заявление на оказания частичной компенсации аренды жилья в размере 90%',
  [RouteItem.KINDERGARTEN]: 'Детский сад',
  [RouteItem.SANATORIUM]: 'Санаторий',
  [RouteItem.VACATION_APPLICATIONS]: 'Заявления на отпуска',
  [RouteItem.ENQUIRY]: 'Заявление на выдачу справки с места работы',
  [RouteItem.WORK_BOOK_COPY]: 'Заявление на выдачу заверенной копии трудовой книжки',

  [RouteItem.PHONEBOOK]: 'Телефонный справочник',
};
