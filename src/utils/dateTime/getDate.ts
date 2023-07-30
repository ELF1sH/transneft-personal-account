export enum DateFormat {
  DD_MM_YYYY = 'DD_MM_YYYY'
}

export const getDate = (stringDate: string, dateFormat = DateFormat.DD_MM_YYYY): string => {
  const date = new Date(stringDate);

  if (dateFormat === DateFormat.DD_MM_YYYY) {
    const day = (`0${date.getDate()}`).slice(-2);
    const month = (`0${date.getMonth() + 1}`).slice(-2);
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  }

  return date.toDateString();
};
