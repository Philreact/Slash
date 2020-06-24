// @ts-nocheck

import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import songs from "./reducers/songs";
import favourites from "./reducers/favourites";
import loading from "./reducers/loading";
import { AppActions } from "./types/actions";
export const rootReducer = combineReducers({
  songs,
  favourites,
  loading,
});

const initialState = {};

const middleware = [thunk as ThunkMiddleware<AppState, AppActions>];
let composeEnhancers = compose;
if (process.browser) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export type AppState = ReturnType<typeof rootReducer>;

export default store;
