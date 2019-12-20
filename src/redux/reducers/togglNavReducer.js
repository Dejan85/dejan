import { SHOW__NAV, DISABLED__NAV } from "../type/type";

const initialState = { showNav: true };

export default function(state = initialState, action) {
  switch (action.type) {
    case SHOW__NAV:
      return {
        ...state,
        showNav: action.payload
      };
    case DISABLED__NAV:
      return {
        ...state,
        showNav: action.payload
      };
    default:
      return state;
  }
}
