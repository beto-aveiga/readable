import { createStore, applyMiddleware, compose } from "redux";
import { combineReducers } from "redux";
import commentsReducer from "./comments/reducer";
import postsReducer from "./posts/reducer";
import thunk from "redux-thunk";

// Combining all reducers in the App
const rootReducer = combineReducers({ commentsReducer, postsReducer });
// Creating composed middleware
const composedMiddleware = compose( applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );
// Creating the store and second argument for debugging purposes with Redux Devtools
const store = createStore(rootReducer, composedMiddleware );

export default store;
