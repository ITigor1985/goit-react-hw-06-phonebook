import { configureStore, getDefaultMiddleware, createSlice} from '@reduxjs/toolkit';

import {combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];


const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    add(state, action){
      return [action.payload, ...state]
    },
    remove(state, action){
      return state.filter(contact => contact.id !== action.payload);
    },    
  },
})

export const { add, remove} = itemsSlice.actions

// const myReducerItems = createReducer(initialState, {
//   [add]: (state, action) => [action.payload, ...state],
//   [remove]: (state, action) => {
//     return state.filter(contact => contact.id !== action.payload);
//   },
// });
// -----------------------------------------------------------------------------


const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(state, action){
      return state = action.payload;
    },   
  },
})

export const {setFilter} = filterSlice.actions


// const myFilter = createReducer(initialStateFilter, {
//   [setFilter]: (state, action) => {
//     return (state = action.payload);
//   },
// });

// -----------------------------------------------------------------------------

const persistConfig = {
  key: 'contactsBook',
  storage,
  blacklist: ['filter'],
};

const rootReducer = combineReducers({
  items: itemsSlice.reducer,
  filter: filterSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['persist/PERSIST'],
    },
  }),
});

export const persistor = persistStore(store);
export default store;
