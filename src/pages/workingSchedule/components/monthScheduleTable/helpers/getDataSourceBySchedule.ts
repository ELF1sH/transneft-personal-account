import { IScheduleDay } from 'domain/entities/workingSchedule';

import { getDay } from 'utils/dateTime/getDay';

export const getDataSourceBySchedule = (days: IScheduleDay[]) => {
  // Worked hours
  const workedHoursEntries: [string, string][] = days.map(({ date, workedHours }) => ([
    getDay(date), workedHours.toString(),
  ]));
  workedHoursEntries.unshift(['date', 'Явка']);

  const workedHoursRow = Object.fromEntries(workedHoursEntries);

  // Night hours
  const nightHoursEntries: [string, string][] = days.map(({ date, nightHours }) => ([
    getDay(date), nightHours.toString(),
  ]));
  nightHoursEntries.unshift(['date', 'Ночь']);

  const nightHoursRow = Object.fromEntries(nightHoursEntries);

  // Returning result
  if (Object.values(workedHoursRow).length === 1 && Object.values(nightHoursRow).length === 1) {
    return [];
  }
  return [workedHoursRow, nightHoursRow];
};
