import { applyMiddleware, createStore, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import * as Sentry from "@sentry/react";
import wsMiddleware from "./middleware/ws";
import rootReducer from "./reducers";
import { saveState, loadState } from "./localStorage";

const sentryReduxEnhancer = Sentry.createReduxEnhancer({});

export default function configureStore() {
  const preloadedState = loadState();
  const middlewareEnhancer = composeWithDevTools(
    applyMiddleware(thunkMiddleware, wsMiddleware)
  );

  const enhancers = [middlewareEnhancer, sentryReduxEnhancer];
  const composedEnhancers = compose(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);
  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./reducers", () => store.replaceReducer(rootReducer));
  }
  store.subscribe(() => {
    const { session, settings } = store.getState();

    saveState({
      session,
      settings,
    });
  });

  return store;
}
