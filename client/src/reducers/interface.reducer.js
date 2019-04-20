import {
  UI_BACK_HIDE,
  UI_BACK_SHOW,
  UI_SHOW_BACK_ARROW,
  UI_SHOW_NAV
} from "../actions/types";
const INITIAL_STATE = {
  backShown: false,
  showBackArrow: false,
  showNav: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UI_BACK_SHOW:
      return { ...state, backShown: true };
    case UI_BACK_HIDE:
      return { ...state, backShown: false };
    case UI_SHOW_BACK_ARROW:
      return { ...state, showBackArrow: action.payload };
    case UI_SHOW_NAV:
      return { ...state, showNav: action.payload };
    default:
      return state;
  }
};
