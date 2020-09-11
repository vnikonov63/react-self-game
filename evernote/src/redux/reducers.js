import { SET_USER } from "./action-type";

function userReducer(state = {}, action) {
  switch (action.type) {
    case SET_USER:
      return action.payload.user;
    default:
      return state;
  }
}
export default userReducer;