import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
import { persistedReducer } from './auth/auth-slice';

const middleware = [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
  ];

  export const store = configureStore({
    reducer: {
      auth: persistedReducer ,
      
    },
     middleware,
     devTools: process.env.NODE_ENV === 'development',
  });
  
  export const persistor = persistStore(store);