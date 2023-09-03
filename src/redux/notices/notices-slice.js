import { createSlice } from '@reduxjs/toolkit';
import {
  fetchNotices,
  addNotice,
  getNoticeById,
  removeNotice,
  filterNotice,
  getUserCurrentNotices,
  addUserCurrentFavorite,
  deleteUserCurrentNotices,
  getUserCurrentFavorite,
} from './notices-operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const noticesInitialState = {
  items: [],
  userNotices: [],
  userFavoriteNotices: [],
  userFavoriteNoticesID: [],
  noticeById: {},
  searchQuery: null,
  isLoading: false,
  error: null,

  filtredNotices: [],
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState: noticesInitialState,
  // reducers: {
  // filterFavorites: (state, action) => {
  //   state.favorites = state.favorites.filter(favorite =>
  //     favorite.title.toLowerCase().includes(action.payload)
  //   );
  // },
  //   filterItems: (state, action) => {
  //     state.filtredNotice = state.items.filter(item =>
  //       item.title.toLowerCase().includes(action.payload)
  //     );
  //   },
  // },

  extraReducers: builder =>
    builder

      .addCase(getUserCurrentNotices.fulfilled, (state, { payload }) => {
        state.userNotices = payload;

        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(deleteUserCurrentNotices.fulfilled, (state, { payload }) => {
        state.userNotices = state.userNotices.filter(
          notice => notice._id !== payload
        );
        state.items = state.items.filter(notice => notice._id !== payload);

        state.isLoading = false;
        state.isLoggedIn = true;
      })
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
      .addCase(fetchNotices.fulfilled, (state, action) => {
        state.items = action.payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(getNoticeById.fulfilled, (state, action) => {
        state.noticeById = action.payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(addNotice.fulfilled, (state, action) => {
        // state.items.splice(0, 0, action.payload);
        state.items = [action.payload, ...state.items];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(removeNotice.fulfilled, (state, { payload }) => {
        console.log('payload:', payload);
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(item => item._id !== payload.id);
      })
      .addCase(filterNotice.fulfilled, (state, { payload }) => {
        state.filtredNotices = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getUserCurrentNotices.pending, handlePending)
      .addCase(addUserCurrentFavorite.pending, handlePending)
      .addCase(fetchNotices.pending, handlePending)
      .addCase(getNoticeById.pending, handlePending)
      .addCase(addNotice.pending, handlePending)
      .addCase(removeNotice.pending, handlePending)
      .addCase(filterNotice.pending, handlePending)
      .addCase(deleteUserCurrentNotices.pending, handlePending)
      .addCase(getUserCurrentFavorite.pending, handlePending)
      .addCase(getUserCurrentNotices.rejected, handleRejected)
      .addCase(fetchNotices.rejected, handleRejected)
      .addCase(getNoticeById.rejected, handleRejected)
      .addCase(addNotice.rejected, handleRejected)
      .addCase(removeNotice.rejected, handleRejected)
      .addCase(filterNotice.rejected, handleRejected)
      .addCase(addUserCurrentFavorite.rejected, handleRejected)
      .addCase(deleteUserCurrentNotices.rejected, handleRejected)
      .addCase(getUserCurrentFavorite.rejected, handleRejected),
});

// export const { filterItems } = noticesSlice.actions;

export const noticesReducer = noticesSlice.reducer;
