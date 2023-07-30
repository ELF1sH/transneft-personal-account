// export interface IWorkingScheduleUserInfo {
//   id: string;
//   fullName: string;
//   jobTitle: string;
//   personnelNumber: string;
//   workingScheduleNumber: string;
//   feature: string;
// }
//
// export type IWorkingScheduleMonthSchedule = IWorkingScheduleDayMonthSchedule[];
//
// export interface IWorkingScheduleDayMonthSchedule {
//   dayNumber: number;
//   isDayOff: boolean;
//   isHoliday: string;
//   presence: string;
//   night?: string;
// }
//
// export interface IWorkingScheduleSummarize {
//   id: string;
//   hoursScheduled: string;
//   hoursStandard: string;
//   deviationFromTheStandard?: string;
//   hoursNight?: string;
//   hoursHoliday?: string;
//   hoursScheduledYear: string;
//   hoursStandardYear: string;
//   deviationFromTheStandardYear?: string;
//   hoursHolidayYear?: string;
// }

export interface ISummarizeStatistic {
  workedHours: number;
  totalHours: number;
  difference: number;
  nightHours: number;
  holidayHours: number;
}

export interface IScheduleDay {
  date: string;
  type: IScheduleDayType;
  workedHours: number;
  nightHours: number;
}

export enum IScheduleDayType {
  GENERAL = 'GENERAL',
  WEEKEND = 'WEEKEND',
  HOLIDAY = 'HOLIDAY',
}
