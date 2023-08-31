import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllFriends = createAsyncThunk(
  'friends/allFriends',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/api/friends/getAll');

      return data.data.friends;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
