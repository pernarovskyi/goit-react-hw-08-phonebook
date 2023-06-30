import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './filter/filterSlice';
import { authReducer } from './auth/authSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, authReducer),
  contacts: contactsReducer,
  filter: filterReducer,
},
);
