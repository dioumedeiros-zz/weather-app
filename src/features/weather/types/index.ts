export type City = {
  name: string;
  country: string;
  showDetail: boolean;
};

type MainWeather = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
};

export type WeatherResponse = {
  main: MainWeather;
};
