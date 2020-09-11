import {
  SET_USER,
  DELETE_USER,
  ADD_SCORE,
  SWITCH_RESULT,
  SET_RESULT,
} from "./action-type";

export function setUser(user) {
  return {
    type: SET_USER,
    payload: {
      user,
    },
  };
}

export function deleteUser() {
  return {
    type: DELETE_USER,
  };
}

export function addScore(score) {
  return {
    type: ADD_SCORE,
    payload: {
      score,
    },
  };
}

export function switchResult(outterIndex, innerIndex) {
  return {
    type: SWITCH_RESULT,
    payload: {
      innerIndex,
      outterIndex,
    },
  };
}

export function setResult(array) {
  return {
    type: SET_RESULT,
    payload: {
      array,
    },
  };
}
