import { combineReducers, createStore } from "redux";
import ArticlesReducer from "./reducers/articlesReducer";
import ImagesReducer from "./reducers/imagesReducer";

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.log(e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

let reducers = combineReducers({
  Articles: ArticlesReducer,
  Images: ImagesReducer
});


const persistedState = loadFromLocalStorage();

let store = createStore( 
  reducers,
  persistedState
   );
window.store = store;
store.subscribe(() => saveToLocalStorage(store.getState()));
export default store;
