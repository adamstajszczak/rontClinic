import { combineReducers } from "redux";
import { reducer as formReducers } from "redux-form";
import authReducer from "./auth.reducer";
import interfaceReducer from "./interface.reducer";

export default combineReducers({
  auth: authReducer,
  form: formReducers,
  ui: interfaceReducer
});
