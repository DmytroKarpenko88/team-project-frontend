import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

axios.defaults.baseURL = 'https://team-project-backend-881k.onrender.com';

export const fetchNotices = createAsyncThunk('notices/fetchAll', async ({ category = '' }, thunkAPI) => {
    try {
      const response = await axios.get(`/api/notices/${category}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });

  export const fetchNoticeById = createAsyncThunk('notices/fetchOne', async (noticeId, thunkAPI) => {
    try {
      // const params = query ? `?${queryString.stringify({ query })}` : '';
      const response = await axios.get(`/api/notices/${noticeId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });

  export const addNotice = createAsyncThunk('notices/addNotice', async (fields, thunkAPI) => {
    try {
      const response = await axios.post('/api/notices', fields);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });