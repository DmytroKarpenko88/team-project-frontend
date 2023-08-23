import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://team-project-backend-881k.onrender.com/api';

const token = {
    set(token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
      axios.defaults.headers.common.Authorization = '';
    },
  };

  export const register = createAsyncThunk('auth/register', async credential => {
    console.log("credential:", credential)
    try {
      const { data } = await axios.post('/auth/registration', credential);
      console.log("data:", data)
      token.set(data.token);
      return data;
    } catch (error) {
        console.log("error:", error) 
    }
     });

    export const login = createAsyncThunk('auth/login', async credential => {
        try {
          const { data } = await axios.post('/auth/login', credential);
          token.set(data.token);
          return data;
        } catch (error) {}
      });
      
      export const logOut = createAsyncThunk('auth/logOut', async credential => {
        try {
          const { data } = await axios.post('/auth/logout', credential);
          token.unset();
          return data;
        } catch (error) {}
      });
      
      export const fetchCurrentUser = createAsyncThunk(
        'auth/refresh',
        async (_, thunkAPI) => {
          const state = thunkAPI.getState();
          const persistedToken = state.auth.token;
          if (persistedToken === null) {
            return thunkAPI.rejectWithValue('Unable to fetch user');;
          }
          token.set(persistedToken);
          try {
              const {data} = await axios.get('/users/current');
              return data;
          } catch (error) {
              return thunkAPI.rejectWithValue(error.message);
          }
        }
  );