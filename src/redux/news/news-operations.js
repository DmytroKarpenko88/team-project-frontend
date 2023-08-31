import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllNews = createAsyncThunk(
  'news/allNews',
  async ({ page, limit }, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `/api/news/getAll?page=${page}&limit=${limit}`
      );

      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
