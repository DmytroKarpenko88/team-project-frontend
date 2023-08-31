import { createSlice } from '@reduxjs/toolkit';
import { getAllNews } from './news-operations';

const initialState = {
  news: [],
  totalCount: 0,
  error: null,
  isLoading: false,
  isLoggedIn: false,
};

const newsSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder.addCase(getAllNews.fulfilled, (state, action) => {
      state.news = action.payload.news;
      state.totalCount = action.payload.totalCount;
      state.isLoggedIn = true;
      state.isLoading = false;
    });
  },
});

export const newsReducer = newsSlice.reducer;
