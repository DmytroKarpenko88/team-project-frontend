import { createSlice } from '@reduxjs/toolkit';
import {
  fetchNotices,
  addNotice,
  getNoticeById,
  removeNotice,
  filterNotice,
  addFavoriteNotice,
  removeFavoriteNotice,
} from './notices-operations';

const noticesInitialState = {
  items: [],
  category: 'in good hands',
  noticeById: {},
  searchQuery: '',
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
      .addCase(fetchNotices.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getNoticeById.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getNoticeById.fulfilled, (state, action) => {
        console.log("action:", action)
        state.noticeById = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getNoticeById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addNotice.fulfilled, (state, action) => {
        console.log('action:', action);
        // state.items.splice(0, 0, action.payload);
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(removeNotice.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(filterNotice.fulfilled, (state, action) => {
        state.filtredNotices = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addFavoriteNotice.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(removeFavoriteNotice.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        // state.favorites = state.favorites.filter(
        //   favorite => favorite._id !== action.meta.arg
        // );
      })



});

// export const { filterItems } = noticesSlice.actions;

export const noticesReducer = noticesSlice.reducer;
