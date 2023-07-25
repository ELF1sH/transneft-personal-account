export interface IWorkingScheduleUserInfo {
  id: string;
  fullName: string;
  jobTitle: string;
  personnelNumber: string;
  workingScheduleNumber: string;
  feature: string;
}

export type IWorkingScheduleMonthSchedule = IWorkingScheduleDayMonthSchedule[];

export interface IWorkingScheduleDayMonthSchedule {
  dayNumber: number;
  isDayOff: boolean;
  isHoliday: string;
  presence: string;
  night?: string;
}

export interface IWorkingScheduleSummarize {
  id: string;
  hoursScheduled: string;
  hoursStandard: string;
  deviationFromTheStandard?: string;
  hoursNight?: string;
  hoursHoliday?: string;
  hoursScheduledYear: string;
  hoursStandardYear: string;
  deviationFromTheStandardYear?: string;
  hoursHolidayYear?: string;
}
