import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import commentsReducer from "./comments/reducer";
import postsReducer from "./posts/reducer";
import thunk from "redux-thunk";

// Combining all reducers in the App
const rootReducer = combineReducers({ commentsReducer, postsReducer });
// Creating the store and second argument for debugging purposes with Redux Devtools
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
