import { createSlice } from '@reduxjs/toolkit';
import {
  fetchNotices,
  addNotice,
  getNoticeById,
  removeNotice,
  filterNotice,
} from './notices-operations';

const noticesInitialState = {
  items: [],
  // category: null,
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
    .addCase(fetchNotices.pending, state => {
      state.isLoading = true;
      state.error = null;
    })
      .addCase(fetchNotices.fulfilled, (state, action) => {
        state.items = action.payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(getNoticeById.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getNoticeById.fulfilled, (state, action) => {
        state.noticeById = action.payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(getNoticeById.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(addNotice.fulfilled, (state, action) => {
        // console.log('action:', action);
        // state.items.splice(0, 0, action.payload);
        // state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(removeNotice.fulfilled, (state, action) => {
        state.items = action.payload;
        state.items = state.items.filter(item => item._id !== action.payload.id);
        // console.log('state.items:', state.items);

        state.isLoading = false;
        state.error = null;
      })
      .addCase(filterNotice.fulfilled, (state, action) => {
        state.filtredNotices = action.payload;
        state.isLoading = false;
        state.error = null;
      }),
  // .addCase(addFavoriteNotice.fulfilled, (state, action) => {
  //   state.items = action.payload;
  //   console.log('state.items:', state.items);
  //   state.isLoading = false;
  //   state.error = null;
  // })
  // .addCase(removeFavoriteNotice.fulfilled, (state, action) => {
  //   state.isLoading = false;
  //   state.error = null;
  //   // state.favorites = state.favorites.filter(
  //   //   favorite => favorite._id !== action.meta.arg
  //   // );
  // }),
});

// export const { filterItems } = noticesSlice.actions;

export const noticesReducer = noticesSlice.reducer;
