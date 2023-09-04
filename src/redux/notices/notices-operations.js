import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// axios.defaults.baseURL = 'https://team-project-backend-881k.onrender.com';

export const fetchNotices = createAsyncThunk(
  'notices/fetchAll',

  async (credentials, thunkAPI) => {
    const { categoryName, search } = credentials;

    try {
      const { data } = await axios.get(
        `/api/notices/filter/${categoryName}?search=${search}`
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getNoticeById = createAsyncThunk(
  'notices/fetchOne',
  async (noticeId, thunkAPI) => {
    try {
      // const params = query ? `?${queryString.stringify({ query })}` : '';
      const { data } = await axios.get(`/api/notices/${noticeId}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addNotice = createAsyncThunk(
  'notices/addNotice',
  async (fields, thunkAPI) => {
    try {
      const { data } = await axios.post('/api/notices', fields);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeNotice = createAsyncThunk(
  'notices/removeNotice',
  async (_id, { rejectWithValue }) => {
    try {
      await axios.delete(`/api/notices/${_id}`);

      return _id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const filterNotice = createAsyncThunk(
  'notices/filterNotice',
  async (category, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/api/notices/filter/${category}`);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getUserCurrentNotices = createAsyncThunk(
  'notices/userCurrentNotices',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/api/users/current/notices');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteUserCurrentNotices = createAsyncThunk(
  'notices/deleteUserCurrentNotices',
  async (noticeId, thunkAPI) => {
    try {
      await axios.delete(`/api/users/current/notices/${noticeId}`);

      return noticeId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addUserCurrentFavorite = createAsyncThunk(
  'notices/addUserCurrentFavorite',
  async (noticeId, thunkAPI) => {
    try {
      const { data } = await axios.patch(
        `/api/users/current/favorites/${noticeId}`
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUserCurrentFavorite = createAsyncThunk(
  'notices/getUserCurrentFavorite',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/users/current/favorites`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
