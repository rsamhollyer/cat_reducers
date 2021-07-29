import { combineReducers } from 'redux';
import { NAP, EAT, PLAY } from '../actions';

const defaultState = {
  activity: 'napping',
};

export function catActivity(state = defaultState, action) {
  switch (action?.type) {
    case NAP:
      return {
        activity: 'napping',
      };

    case EAT:
      return {
        activity: 'eatting',
      };

    case PLAY:
      return {
        activity: 'playing',
      };

    default:
      return state;
  }
}
export const rootReducer = combineReducers({
  activity: catActivity,
});
