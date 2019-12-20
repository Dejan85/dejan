import { GET__JSON } from "../type/type";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET__JSON:
      return {
        ...state,
        projects: action.payload
      };

    default:
      return state;
  }
}
