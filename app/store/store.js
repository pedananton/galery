import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

const middleWare = applyMiddleware(thunk, logger);

const rootReducer = combineReducers({});

export const store = createStore(rootReducer, middleWare);
