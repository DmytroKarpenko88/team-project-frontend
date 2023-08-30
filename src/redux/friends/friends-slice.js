import { createSlice } from '@reduxjs/toolkit';
import { getAllFriends } from './friends-operations';

const initialState = {
  friends: [],
  error: null,
  isLoading: false,
  isLoggedIn: false,
};

const friendsSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder.addCase(getAllFriends.fulfilled, (state, action) => {
      // console.log(" action:",  action)
      state.friends = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
    });
  },
});

export const friendsReducer = friendsSlice.reducer;
