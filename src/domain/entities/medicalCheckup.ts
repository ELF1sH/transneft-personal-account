export interface IMedicalCheckup {
  id: string;
  type: MedicalCheckupType;
  date: string;
  certificate: string;
}

export enum MedicalCheckupType {
  MEDICAL = 'MEDICAL',
  PSYCHIATRIC = 'PSYCHIATRIC ',
}
