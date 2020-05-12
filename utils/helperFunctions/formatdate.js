const formatdate = (date) => {
  const montharr = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dev',
  ];
  const modifiedDate = new Date(date);

  // Get all the things
  const month = montharr[modifiedDate.getMonth()];
  const curr_date = modifiedDate.getDate();
  const curr_year = modifiedDate.getFullYear();
  let curr_hour = modifiedDate.getHours();
  let curr_min = String(modifiedDate.getMinutes());
  let meridiem = 'AM';

  // Update hours, minutes, and meridiem as necessary
  if (curr_hour >= 12) meridiem = 'PM';

  if (curr_hour > 12) curr_hour -= 12;

  if (curr_min.length === 1) curr_min = `0${curr_min}`;

  const formattedDate =
    month +
    ' ' +
    curr_date +
    ', ' +
    curr_year +
    ' ' +
    curr_hour +
    ':' +
    curr_min +
    ' ' +
    meridiem;
  return formattedDate;
};

export default formatdate;
