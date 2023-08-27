import { createSlice } from '@reduxjs/toolkit';
import { fetchNotices, addNotice, getNoticeById } from './notices-operations';

const noticesInitialState = {
  items: [],
  category: 'in good hands',
  searchQuery: '',
  isLoading: false,
  error: null,
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState: noticesInitialState,
  extraReducers: builder =>
    builder
      .addCase(fetchNotices.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addNotice.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
        state.error = null;
      }),
});

export const noticesReducer = noticesSlice.reducer;
