import { FETCH_WEATHER_DATA } from '../actions';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER_DATA:
    return [ action.payload.data, ...state ]; // [ city, city, city ] NOT [ city, [ city, city  ] ]
  }

  return state;
}
