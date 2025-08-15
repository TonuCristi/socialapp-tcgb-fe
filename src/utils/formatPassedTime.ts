export function formatPassedTime(time: string) {
  const todayDate = Date.now() / 1000 / 60;

  const passedTime = todayDate - new Date(time).getTime() / 1000 / 60;

  // Minutes
  const passedTimeInMinutesRounded = Math.round(passedTime);
  if (passedTimeInMinutesRounded >= 0 && passedTimeInMinutesRounded < 60) {
    return `${passedTimeInMinutesRounded} ${
      passedTimeInMinutesRounded === 1 ? "minute" : "minutes"
    } ago`;
  }

  // Hours
  const passedTimeInHours = passedTime / 60;
  const passedTimeInHoursRounded = Math.round(passedTimeInHours);
  if (passedTimeInHoursRounded >= 1 && passedTimeInHoursRounded < 24) {
    return `${passedTimeInHoursRounded} ${
      passedTimeInHoursRounded === 1 ? "hour" : "hours"
    } ago`;
  }

  // Days
  const passedTimeInDays = passedTime / 60 / 24;
  const passedTimeInDaysRounded = Math.round(passedTimeInDays);
  if (passedTimeInDays >= 1 && passedTimeInDays < 365) {
    return `${passedTimeInDaysRounded} ${
      passedTimeInDaysRounded === 1 ? "day" : "days"
    } ago`;
  }

  // Weeks
  const weeksCount = passedTimeInDaysRounded / 7;
  if (
    passedTimeInDaysRounded >= 7 &&
    passedTimeInDaysRounded <= 28 &&
    passedTimeInDaysRounded % 7 === 0
  ) {
    return `${weeksCount} ${weeksCount === 1 ? "week" : "weeks"} ago`;
  }

  // Months
  const monthsCount = Math.round(passedTimeInDays) / 30;
  if (
    monthsCount >= 1 &&
    monthsCount < 12 &&
    passedTimeInDaysRounded % 30 === 0
  ) {
    return `${monthsCount} ${monthsCount === 1 ? "month" : "months"} ago`;
  }

  // Years
  const yearsCount = Math.round(passedTimeInDaysRounded / 365);
  if (passedTimeInDays >= 365) {
    return `${yearsCount} ${yearsCount === 1 ? "year" : "years"} ago`;
  }
}
