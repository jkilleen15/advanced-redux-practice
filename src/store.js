import {createStore} from 'redux';
import state from "./state";
import reducers from "./reducers/index.js";

var store = createStore(reducers,state);
window.store = store;

export default store;

/*
X Create a store.js file
X Import createStore from redux
X Import state from state.js
X Import reducers from reducers/index
X Create the store and export it
*/
