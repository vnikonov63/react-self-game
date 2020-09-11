import {
  SET_USER,
  DELETE_USER,
  ADD_SCORE,
  SWITCH_RESULT,
  SET_RESULT,
} from "./action-type";

export function userReducer(state = false, action) {
  switch (action.type) {
    case SET_USER:
      return action.payload.user;
    case DELETE_USER:
      return false;
    case ADD_SCORE:
      return {
        ...state,
        score: state.score + action.payload.score,
      };
    default:
      return state;
  }
}

export function resultsReducer(state = [], action) {
  switch (action.type) {
    case SWITCH_RESULT:
      let newState = JSON.parse(JSON.stringify(state));
      newState[action.payload.outterIndex][action.payload.innerIndex] = !state[
        action.payload.outterIndex
      ][action.payload.innerIndex];
      return newState;
    case SET_RESULT:
      return action.payload.array;
    default:
      return state;
  }
}
