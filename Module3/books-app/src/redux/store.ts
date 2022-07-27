import { combineReducers, createStore } from 'redux';
import { StoreState } from './mainTypes';
import booksRedux from './booksRedux';

// define initial state and shallow-merge initial data
const initialState: StoreState = {
  books: [
    { id: 'te1314derw', title: 'Of Mice and Men', author: 'John Steinbeck', price: 25 },
    { id: 't32s14dzdw', title: 'East of Eden', author: 'John Steinbeck', price: 30 }
  ]
}

// define reducers
const reducers = {
  books: booksRedux
}

// combine reducers
const combinedReducers = combineReducers(reducers);

// create store
const store = createStore(
  combinedReducers,
  initialState
);

export default store;