import { createStore } from "redux";
import { cartReducer } from "./reducers";
import { loadFromLocalStorage, saveToLocalStorage } from "../localStorage";

const persistedState = loadFromLocalStorage();

const store = createStore(cartReducer, persistedState);

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default store;