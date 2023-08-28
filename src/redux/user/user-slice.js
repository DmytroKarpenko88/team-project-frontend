import { createSlice } from '@reduxjs/toolkit';
import {
  getUserCurrentNotices,
  deleteUserCurrentNotices,
  getUserCurrentFavorite,
  addUserCurrentFavorite,
} from './user-operations';

const initialState = {
  userNotices: [{
    title: null,
    name: null,
    sex: null,
    _category: null,
    favorite: false,
    photo: null,
    place: null,
    birthday: null,
    type: null,
    describe: null,
    _id: null,
    createdAt: null,
    updatedAt: null,
  }],
  userFavoriteNotices: [],
  error: null,
  isLoading: false,
  isLoggedIn: false,
};

const userSlice = createSlice({
    name: 'user',
  initialState,
  extraReducers: builder => {
    builder
    .addCase(getUserCurrentNotices.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUserCurrentNotices.fulfilled, (state, action) => {
        // console.log(" action:",  action)
        state.userNotices = action.payload;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(getUserCurrentNotices.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteUserCurrentNotices.fulfilled, (state, action) => {
        const index = state.items.findIndex(notice => notice._id === action.payload.notice.id);
        state.items[index].favorite = action.payload.notice.favorite;
        state.isLoading = false;
        state.isLoggedIn = true;
      })
      .addCase(addUserCurrentFavorite.fulfilled, (state, action) => {
        const index = state.items.findIndex(notice => notice._id === action.payload.notice.id);
        state.items[index].favorite = action.payload.notice.favorite;
        state.isLoading = false;
        state.isLoggedIn = true;
      })
      .addCase(getUserCurrentFavorite.fulfilled, (state, action) => {
        // console.log(" action:",  action)
        state.userFavoriteNotacise = action.payload;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      
}
});


export const userReducer = userSlice.reducer;