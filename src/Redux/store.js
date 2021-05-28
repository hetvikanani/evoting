import { createStore, combineReducers } from "redux";

import reducers from "./reducer";
import { loadState, saveState } from "./localstorage";

const persistedState = loadState();

console.log(persistedState, "done m");

const store = createStore(
  combineReducers({
    ...reducers,
  }),
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveState(store.getState());
});

export { store };
