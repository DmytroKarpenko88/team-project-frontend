import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  login,
  logOut,
  fetchCurrentUser,
  getUserProfile,
  updateUser,
  getUserCurrentNotices,
} from './auth-operations';

const initialState = {
  user: {
    name: null,
    email: null,
    phone: null,
    city: null,
    birthday: null,
    avatarURL: null,
    
  },
  pets: [],
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
        console.log("actionRegister:", action)
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
        state.isLoading = false;
        state.isRegistered = true;
        state.isLoggedIn = true;
      })

      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
        state.error = null;
        state.isLoggedIn = true;
      })

      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRegistered = false;
      })

      .addCase(fetchCurrentUser.pending, state => {
        state.isLoading = true;
        state.isRefreshing = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.isLoading = false;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(fetchCurrentUser.rejected, state => {
        state.isRefreshing = false;
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
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(updateUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        if (action.payload.token) {
          state.token = action.payload.token;
          state.isLoggedIn = true;
        }
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getUserCurrentNotices.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUserCurrentNotices.fulfilled, (state, action) => {
        // console.log(" action:",  action)
        state.pets.push(action.payload);
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(getUserCurrentNotices.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  },
});


export const authReducer = authSlice.reducer

