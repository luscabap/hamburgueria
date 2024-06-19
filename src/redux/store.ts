import { createStore, applyMiddleware } from "redux";
import rootReducer from "./root-reducer";
import { thunk } from "redux-thunk";
import logger from "redux-logger";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

export type AppStore = typeof store