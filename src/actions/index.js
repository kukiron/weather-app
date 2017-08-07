import axios from 'axios';

const API_KEY = '0a5d84eba991ba66258909e4dba9efab';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER_DATA = 'FETCH_WEATHER_DATA';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log('Request:', request);

  return {
    type: FETCH_WEATHER_DATA,
    payload: request
  };
}
