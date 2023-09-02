import { createSlice } from '@reduxjs/toolkit';
import {
  getUserCurrentNotices,
  deleteUserCurrentNotices,
  getUserCurrentFavorite,
  addUserCurrentFavorite,
} from './user-operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  userNotices: [],
  userFavoriteNotices: [],
  userFavoriteNoticesID: [],
  error: null,
  isLoading: false,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getUserCurrentNotices.fulfilled, (state, action) => {
        state.userNotices = action.payload;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      // .addCase(deleteUserCurrentNotices.fulfilled, (state, action) => {
      //   const index = state.items.findIndex(
      //     notice => notice._id === action.payload.notice.id
      //   );
      //   console.log('action.payload.notice.id:', action.payload.notice.id);

      //   state.items[index].favorite = action.payload.notice.favorite;
      //   state.isLoading = false;
      //   state.isLoggedIn = true;
      // })
      .addCase(addUserCurrentFavorite.fulfilled, (state, action) => {
        state.userFavoriteNotices = state.userFavoriteNotices.filter(it =>
          action.payload.favorites.includes(it._id)
        );
        state.userFavoriteNoticesID = action.payload.favorites;
        state.isLoading = false;
        state.isLoggedIn = true;
      })
      .addCase(getUserCurrentFavorite.fulfilled, (state, action) => {
        state.userFavoriteNotices = action.payload;

        state.userFavoriteNoticesID = action.payload.map(it => it._id);

        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(getUserCurrentNotices.pending, handlePending)
      .addCase(addUserCurrentFavorite.pending, handlePending)
      .addCase(deleteUserCurrentNotices.pending, handlePending)
      .addCase(getUserCurrentFavorite.pending, handlePending)
      .addCase(getUserCurrentNotices.rejected, handleRejected)
      .addCase(addUserCurrentFavorite.rejected, handleRejected)
      .addCase(deleteUserCurrentNotices.rejected, handleRejected)
      .addCase(getUserCurrentFavorite.rejected, handleRejected);
  },
});

export const userReducer = userSlice.reducer;
