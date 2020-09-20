import { combineReducers } from "redux";

import movies from "./movies";
import filterParams from "./filterParams";

export default combineReducers({
  movies,
  filterParams
});
