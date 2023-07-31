import { MedicalCheckupType } from 'domain/entities/medicalCheckup';

export const parseMedicalCheckupType = (type: MedicalCheckupType) => {
  switch (type) {
    case MedicalCheckupType.MEDICAL:
      return 'Медицинский осмотр';
    case MedicalCheckupType.PSYCHIATRIC:
      return 'Психиатрическое освидетельствование';
    default:
      return 'Неизвестный вид';
  }
};
