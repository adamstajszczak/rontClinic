import { UI_BACK_SHOW, UI_BACK_HIDE, UI_SHOW_BACK_ARROW, UI_SHOW_NAV } from "./types";

export const uiShowBack = () => {
  return {
    type: UI_BACK_SHOW,
    payload: true
  };
};

export const uiHideBack = () => {
  return {
    type: UI_BACK_HIDE,
    payload: false
  };
};

export const uiToggleBackArrow = payload => {
  return {
    type: UI_SHOW_BACK_ARROW,
    payload: payload
  };
};

export const uiToggleNav = payload => {
  return {
    type: UI_SHOW_NAV,
    payload: payload
  }
}
