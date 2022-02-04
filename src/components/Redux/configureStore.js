import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "./Reducers/index";
import reduxImmutableStateInvarient from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSTION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvarient()))
  );
}

export { configureStore };
