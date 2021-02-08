import {createStore} from "redux";
import {applyMiddleware} from "redux";
import thunk from "redux-thunk";
import RootReducer from "./reducers/RootReducer"

/**
 * Store with applied thnukMiddleware,
 * so alongside actions it can also dispatch functions.
 * 
 * When function is provided to store.dispatch, it
 * is called with dispatch and getState binded to store
 */
const store = createStore(RootReducer, applyMiddleware(thunk));

export default store;