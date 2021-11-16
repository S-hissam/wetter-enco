import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { WeatherAction, WeatherData, GET_WEATHER, SET_LOADING } from '../types';

export const getWeather = (city: string): ThunkAction<void, RootState, null, WeatherAction> => {
  return async dispatch => {

    const res = await fetch(`https://www.metaweather.com/api/location/search/?query=${city}`);
    
      const resData: WeatherData = await res.json();
      dispatch({
        type: GET_WEATHER,
        payload: resData
      });
    
  }
}

export const setLoading = (): WeatherAction => {
  return {
    type: SET_LOADING
  }
}

