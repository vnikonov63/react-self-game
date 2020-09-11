import { SET_USER, DELETE_USER } from "./action-type";

function userReducer(state = false, action) {
  switch (action.type) {
    case SET_USER:
      return action.payload.user;
    case DELETE_USER:
      return false;
    default:
      return state;
  }
}
export default userReducer;
