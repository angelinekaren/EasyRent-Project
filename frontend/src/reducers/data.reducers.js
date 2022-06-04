import { SET_DATA, CLEAR_DATA } from "../constants/user.constants";
const initialState = {};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_DATA:
      return { data: payload };
    case CLEAR_DATA:
      return { data: "" };
    default:
      return state;
  }
}
