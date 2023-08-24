import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
  import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/auth-slice';
import { noticesReducer } from './notices/notices-slice';

const middleware = [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
  ];

  const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
  };

  export const store = configureStore({
    reducer: {
      auth: persistReducer(authPersistConfig, authReducer),
      notices: noticesReducer,
    },
     middleware,
  });
  
  export const persistor = persistStore(store);