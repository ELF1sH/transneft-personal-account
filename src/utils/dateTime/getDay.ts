export const getDay = (dateString: string) => {
  const date = new Date(dateString);

  return (`0${date.getDate()}`).slice(-2);
};
