export const converterAge = date => {
  const birthDateString = date;
  const parts = birthDateString.split('-');
  const birthDay = parseInt(parts[0], 10);
  const birthMonth = parseInt(parts[1], 10);
  const birthYear = parseInt(parts[2], 10);

  const currentDate = new Date();

  let yearsDiff = currentDate.getFullYear() - birthYear;
  let monthsDiff = currentDate.getMonth() + 1 - birthMonth;

  if (currentDate.getDate() < birthDay) {
    monthsDiff--;
  }

  if (monthsDiff < 0) {
    yearsDiff--;
    monthsDiff = 12 - birthMonth + (currentDate.getMonth() + 1);
  }

  let period = '';
  if (yearsDiff) {
    period = yearsDiff === 1 ? 'year' : 'years';
  }

  if (yearsDiff === 0 && monthsDiff < 3) {
    return '3 months';
  } else if (yearsDiff === 0 && monthsDiff < 6) {
    return '6 months';
  } else if (yearsDiff === 0 && monthsDiff < 9) {
    return '9 months';
  }

  return `${yearsDiff}  ${period}`;
};
