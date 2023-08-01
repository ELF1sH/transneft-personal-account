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
  LOCAL_TRAINING = 'LOCAL_TRAINING',
  NON_LOCAL_TRAINING = 'NON_LOCAL_TRAINING',
  BUSINESS_TRIP = 'BUSINESS_TRIP',
  EXAMINATION = 'EXAMINATION',
  UNIVERSITY = 'UNIVERSITY',
  VACATION = 'VACATION',
  ILLNESS = 'ILLNESS',
  MOBILIZATION = 'MOBILIZATION',
  FIRED = 'FIRED',
  EMPLOYED = 'EMPLOYED',
}
