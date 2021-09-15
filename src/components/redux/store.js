import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import phoneReducer from "./phone-reducer";

const rootReducer = combineReducers({
  contacts: phoneReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
