import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllNews = createAsyncThunk(
  'news/allNews',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/api/news/getAll');

      return data.data.news;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);