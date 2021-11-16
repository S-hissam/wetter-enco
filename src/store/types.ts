import { JsonObjectExpression } from "typescript";

export const GET_WEATHER = 'GET_WEATHER';
export const SET_LOADING = 'SET_LOADING';

export interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}



export interface WeatherData {
  // Response: JsonObjectExpression,
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lon: number;
    lat: number;
  };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  visibility: number;
  weather: Weather[];
  wind: {
    speed: number;
    deg: number;
  };
}

export interface WeatherState {
  data: WeatherData | null;
  loading: boolean;
}

interface GetWeatherAction {
  type: typeof GET_WEATHER;
  payload: WeatherData;
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
}


export type WeatherAction = GetWeatherAction | SetLoadingAction ;

