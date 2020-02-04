import { routerMiddleware } from "connected-react-router";
import { createHashHistory } from "history";
import { applyMiddleware, createStore, compose } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootReducer from ".";
import rootSaga from "../sagas";

const middlewares = [];
export const history = createHashHistory({
  hashType: "noslash"
});

const sagaMiddleware = createSagaMiddleware();
middlewares.push(routerMiddleware(history));
middlewares.push(sagaMiddleware);

if (process.env.NODE_ENV === `development`) {
  // middlewares.push(logger);
}

export const store = createStore(
  rootReducer(history),
  // composeWithDevTools(applyMiddleware(...middlewares))
  compose(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);
