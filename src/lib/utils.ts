export const validateString = (value: unknown, maxLength: number) => {
    return !(!value || typeof value !== "string" || value.length > maxLength);
  };
  
  export const getErrorMessage = (error: unknown) => {
    let message: string;
    if (error instanceof Error) {
      message = error.message;
    } else if (error && typeof error === "object" && "message" in error) {
      message = String(error.message);
    } else if (typeof error === "string") {
      message = error;
    } else {
      message = "Unknown error";
    }
    return message;
  };
  

export function getTimeDifference(targetDateStr:string) {
  const targetDate = new Date(targetDateStr);

  // Get the current date
  const currentDate = new Date();

  // Calculate the time difference in milliseconds
  const timeDifference = currentDate.getTime() - targetDate.getTime();

  // Calculate the time units
  const millisecondsPerSecond = 1000;
  const secondsPerMinute = 60;
  const minutesPerHour = 60;
  const hoursPerDay = 24;
  const monthsPerYear = 12;
  const daysPerMonth = 30.44; // Average days per month
  const daysPerYear = 365.24; // Average days per year

  // Calculate the time units
  const seconds = Math.floor(timeDifference / millisecondsPerSecond);
  const minutes = Math.floor(seconds / secondsPerMinute);
  const hours = Math.floor(minutes / minutesPerHour);
  const days = Math.floor(hours / hoursPerDay);
  const months = Math.floor(days / daysPerMonth);
  const years = Math.floor(days / daysPerYear);

  
  const remainingMonths = months % monthsPerYear;
  const remainingDays = days % daysPerMonth;
  const remainingHours = hours % hoursPerDay;
  const remainingMinutes = minutes % minutesPerHour;
  const remainingSeconds = seconds % secondsPerMinute;

  const timeDifferenceString = 
  `${years} years`
  +`, ${Math.round(remainingMonths)} months`
  // +`, ${Math.round(remainingDays)} days`
  // +`, ${remainingHours} hours`
  // +`, ${remainingMinutes} minutes`
  // +`, ${remainingSeconds} seconds`;

  return timeDifferenceString;
}