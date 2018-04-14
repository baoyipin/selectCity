import {createStore,applyMiddleware} from "redux";
import reduxThunk from "redux-thunk";
import reduxPromise from "redux-promise";
import reduxLogger from "redux-logger"
import reducers from "./reducers/index";
let store=createStore(reducers,applyMiddleware(reduxThunk,reduxLogger,reduxPromise));
window._store=store;
export default store;
