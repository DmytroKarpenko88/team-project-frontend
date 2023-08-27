import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// axios.defaults.baseURL = 'https://team-project-backend-881k.onrender.com';

export const fetchNotices = createAsyncThunk(
  'notices/fetchAll',
  async (credentials, thunkAPI) => {
    const { category = 'sell', ...params } = credentials;
    try {
      const response = await axios.get(`/api/notices/${category}?${params}`);

      console.log('response:', response);
      return response.data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getNoticeById = createAsyncThunk(
  'notices/getNoticeById',
  async (_id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/notices/notice/${_id}`);

      return data.result;
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
