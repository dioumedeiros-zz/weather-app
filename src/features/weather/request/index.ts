import { WeatherResponse } from '../types';
import { IsValidCache, kelvinToCelsius } from '../../../shared';
import api from '../../../services/api';

export const getCityWeather = async (cityName: string) => {
  const CachedCity = localStorage.getItem(`${cityName}`);
  const city = CachedCity && JSON.parse(CachedCity);

  if (CachedCity && IsValidCache(city?.date)) {
    return {
      temp: city.temp,
      humidity: city.humidity,
      pressure: city.pressure,
      date: city.date,
    };
  } else {
    const response = await api.get<WeatherResponse>(
      `?q=${cityName}&APPID=${process.env.REACT_APP_API_KEY}`
    );

    const result = {
      temp: kelvinToCelsius(response.data.main.temp),
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      date: new Date().getTime(),
    };

    localStorage.setItem(`${cityName}`, JSON.stringify(result));
    return result;
  }
};
