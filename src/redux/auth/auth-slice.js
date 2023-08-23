import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  login,
  logOut,
  fetchCurrentUser,
  updateUser,
} from './auth-operations';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  user: {
    name: null,
    email: null,
    phone: null,
    city: null,
    birthday: null,
    avatarURL: null,
    favorites: [],
    _id: null,
  },
  token: null,
  isLoading: false,
  error: null,
  isLoggedIn: false,
  isRegistered: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        console.log('action:', action);
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })

      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })

      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })

      .addCase(fetchCurrentUser.pending, state => {
        state.isRefreshing = true;
      })

      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })

      .addCase(fetchCurrentUser.rejected, state => {
        state.isRefreshing = false;
      })

      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      });
  },
});

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const persistedReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer
);
