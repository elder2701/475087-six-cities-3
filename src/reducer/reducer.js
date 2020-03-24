import {combineReducers} from "redux";
import {reducer as data} from "./data/data.js";
import {reducer as city} from "./city/city.js";
import {reducer as user} from "./user//user.js";
import {reducer as offer} from "./offer/offer.js";
import {reducer as favorite} from "./favorite/favorite.js";
import NameSpace from "./name-space.js";


export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.CITY]: city,
  [NameSpace.USER]: user,
  [NameSpace.OFFER]: offer,
  [NameSpace.FAVORITE]: favorite
});
