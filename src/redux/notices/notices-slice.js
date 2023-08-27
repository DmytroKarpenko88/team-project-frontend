import { createSlice } from '@reduxjs/toolkit';
import { fetchNotices, addNotice, fetchNoticeById } from './notices-operations';

const noticesInitialState = {
  items: [],
  category: 'in good hands',
  oneNotice: null,
  searchQuery: '',
  isLoading: false,
  error: null,
  filtredNotice: [],
};

const noticesSlice = createSlice({
    name: 'notices',
    initialState: noticesInitialState,
    reducers: {
      // filterFavorites: (state, action) => {
      //   state.favorites = state.favorites.filter(favorite =>
      //     favorite.title.toLowerCase().includes(action.payload)
      //   );
      // },
      filterItems: (state, action) => {
        state.filtredNotice = state.items.filter(item =>
          item.title.toLowerCase().includes(action.payload)
        );
      },
    },
  extraReducers: builder =>
    builder
    .addCase(fetchNotices.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchNoticeById.fulfilled, (state, action) => {
        state.oneNotice = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addNotice.fulfilled, (state, action) => {
        // state.items.splice(0, 0, action.payload);
        state.items.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
})

export const { filterItems } = noticesSlice.actions;

export const noticesReducer = noticesSlice.reducer;