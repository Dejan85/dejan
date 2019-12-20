import { SHOW__NAV, DISABLED__NAV } from "../type/type";

export const showNav = () => dispatch => {
  dispatch({
    type: SHOW__NAV,
    payload: true
  });
};

export const disableNav = () => dispatch => {
  dispatch({
    type: DISABLED__NAV,
    payload: false
  });
};
