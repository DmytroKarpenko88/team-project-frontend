import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

axios.defaults.baseURL = 'https://team-project-backend-881k.onrender.com';

export const fetchNotices = createAsyncThunk(
  'notices/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/api/notices/`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addNotice = createAsyncThunk(
  'notices/addNotice',
  async (fields, thunkAPI) => {
    try {
      const response = await axios.post('/api/notices', fields);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeNotice = createAsyncThunk(
  'notices/removeNotice',
  async (_id, { rejectWithValue }) => {
    try {
      await axios.delete(`/api/notices/notice/${_id}`);

      return { _id };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addFavoriteNotice = createAsyncThunk(
  'notices/addFavoriteNotice',
  async (pet, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/api/notices/favorite/${pet._id}`);

      return data.result.updatedNotice;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeFavoriteNotice = createAsyncThunk(
  'notices/removeFavoriteNotice',
  async (pet, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/api/notices/favorite/${pet._id}`);

      return data.result.updatedNotice;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
