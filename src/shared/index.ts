export const kelvinToCelsius = (temperature: number) => {
  return Math.round(temperature - 273.15);
};

export const IsValidCache = (date: number) => {
  if (date) {
    const minutes = 1000 * 10 * 60;
    return new Date(date + minutes) > new Date();
  }
  return false;
};
