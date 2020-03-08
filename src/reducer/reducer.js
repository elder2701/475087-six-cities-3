import {combineReducers} from "redux";
import {reducer as data} from "./data/data.js";
import {reducer as city} from "./city/city.js";
import NameSpace from "./name-space.js";


export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.CITY]: city
});
