import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  login,
  logOut,
  getUserProfile,
  updateUser,
} from './auth-operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

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
  isRegistered: false,
  error: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        console.log('action:', action);
        state.user = action.payload.user;
        state.token = action.payload.user.token;
        state.isLoggedIn = true;
        state.isRegistered = true;
        state.isLoading = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload.token;
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
      // .addCase(fetchCurrentUser.fulfilled, (state, action) => {

      //   state.user.name = action.payload.name;
      //   state.user.email = action.payload.email;
      //   state.isLoggedIn = true;
      //   state.isLoading = false;
      // })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.user = action.payload;

        state.isLoggedIn = true;
        state.isLoading = false;
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
      .addCase(register.pending, handlePending)
      .addCase(login.pending, handlePending)
      .addCase(logOut.pending, handlePending)
      // .addCase(fetchCurrentUser.pending, handlePending)
      .addCase(getUserProfile.pending, handlePending)
      .addCase(updateUser.pending, handlePending)
      .addCase(register.rejected, handleRejected)
      .addCase(logOut.rejected, handleRejected)
      // .addCase(fetchCurrentUser.rejected, handleRejected)
      .addCase(getUserProfile.rejected, handleRejected)
      .addCase(updateUser.rejected, handleRejected)
      .addCase(login.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
