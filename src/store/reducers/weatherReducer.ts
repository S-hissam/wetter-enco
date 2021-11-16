import { WeatherState, WeatherAction, GET_WEATHER, SET_LOADING } from "../interface";

const initialState: WeatherState = {
  data: null,
  loading: false
}

export default  (state = initialState, action: WeatherAction): WeatherState => {
  switch(action.type) {
    case GET_WEATHER:
      return {
        data: action.payload,
        loading: false
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
   
    default: 
      return state;
  }
}