import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// axios.defaults.baseURL = 'https://team-project-backend-881k.onrender.com';

export const fetchNotices = createAsyncThunk(
  'notices/fetchAll',

  async (credentials, thunkAPI) => {
    const { categoryName } = credentials;

    try {
      const { data } = await axios.get(`/api/notices/filter/${categoryName}`);

      console.log('data:', data);

      return data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const getNoticeById = createAsyncThunk(
//   'notices/getNoticeById',
//   async (_id, thunkAPI) => {
//     try {
//       const { data } = await axios.get(`/api/notices/notice/${_id}`);

//       return data.result;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

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
      console.log('addNotice:', data);
      return data;
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

      return { _id };
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

export const addFavoriteNotice = createAsyncThunk(
  'notices/addFavoriteNotice',
  async (notice, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/api/notices/favorite/${notice}`);

      return data.result.updatedNotice;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeFavoriteNotice = createAsyncThunk(
  'notices/removeFavoriteNotice',
  async (petId, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/api/notices/favorite/${petId}`);

      return data.result.updatedNotice;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
