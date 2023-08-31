import { createSlice } from '@reduxjs/toolkit';
import { getAllNews } from './news-operations';

const initialState = {
  news: [],
  error: null,
  isLoading: false,
  isLoggedIn: false,
};

const newsSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder.addCase(getAllNews.fulfilled, (state, action) => {
      // console.log(" action:",  action)
      state.news = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
    });
  },
});

export const newsReducer = newsSlice.reducer;
