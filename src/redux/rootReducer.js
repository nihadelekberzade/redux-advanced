import { combineReducers } from "redux";
import wineReducer from "./wine/wineReducer";
import beerReducer from "./beer/beerReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  wine: wineReducer,
  beer: beerReducer,
  user: userReducer,
});
export default rootReducer;
