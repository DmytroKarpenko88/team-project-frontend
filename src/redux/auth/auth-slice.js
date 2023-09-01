import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  login,
  logOut,
  fetchCurrentUser,
  getUserProfile,
  updateUser,
} from './auth-operations';

const initialState = {
  pets: [],
  user: {
    name: null,
    email: null,
    phone: null,
    city: null,
    birthday: null,
    avatarURL: null,
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
      .addCase(register.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        // console.log('actionRegister:', action);
        state.user = action.payload.user;
        state.token = action.payload.user.token;
        state.error = null;
        state.isRegistered = true;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
        state.error = null;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRegistered = false;
        state.isLoading = false;
      })
      .addCase(fetchCurrentUser.pending, state => {
        state.isLoading = true;
        state.isRefreshing = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addCase(fetchCurrentUser.rejected, state => {
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addCase(getUserProfile.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.user = action.payload;

        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(updateUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        // state.user = {
        //   ...state.user,
        //   avatarURL: action.payload.data.avatarURL,
        // };
        // state.token = action.payload.token;
        state.user = action.payload.data;
        state.isLoading = false;
      })

      .addCase(updateUser.rejected, state => {
        state.isLoading = false;
      });
  },
});

export const authReducer = authSlice.reducer;
