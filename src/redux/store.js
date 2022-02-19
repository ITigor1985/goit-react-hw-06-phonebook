import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createAction, createReducer, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const add = createAction('myItems/add');
export const remove = createAction('myItems/remove');

const myReducerItems = createReducer(initialState, {
  [add]: (state, action) => [action.payload, ...state],
  [remove]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
});
// -----------------------------------------------------------------------------
const initialStateFilter = '';

export const setFilter = createAction('contacts/setFilter');

const myFilter = createReducer(initialStateFilter, {
  [setFilter]: (state, action) => {
    return (state = action.payload);
  },
});

// -----------------------------------------------------------------------------

const persistConfig = {
  key: 'contactsBook',
  storage,
  blacklist: ['filter'],
};

const rootReducer = combineReducers({
  items: myReducerItems,
  filter: myFilter,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['persist/PERSIST'],
    },
  }),
});

export const persistor = persistStore(store);
