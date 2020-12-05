const formatted = (value) => `0${value}`.slice(-2);

export function formatDate(strDate) {
  const date = new Date(strDate);
  const formattedTime = `${formatted(date.getHours())}:${formatted(date.getMinutes())}`;
  const formattedDate = `${formatted(date.getDay())}/${formatted(
    date.getMonth()
  )}/${date.getFullYear()}`;
  const formattedDatetime = `${formattedTime} ${formattedDate}`;
  return formattedDatetime;
}
