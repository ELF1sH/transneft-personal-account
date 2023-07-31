export const getDay = (stringDate: string) => {
  if (stringDate.endsWith('Z')) stringDate = stringDate.slice(0, -1);

  const date = new Date(stringDate);

  return (`0${date.getDate()}`).slice(-2);
};
