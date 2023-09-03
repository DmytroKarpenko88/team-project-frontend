import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://team-project-backend-881k.onrender.com';

export const fetchPets = createAsyncThunk(
  'pets/fetchPets',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/api/pets/getAll');
      return data.data.pets;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addPet = createAsyncThunk(
  'pets/addPet',
  async (newPet, thunkAPI) => {
    try {
      const { data } = await axios.post('/api/pets/add', newPet);
      toast.success('Pet added');
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deletePet = createAsyncThunk(
  'pets/deletePet',
  async (petId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/api/pets/delete/${petId}`);
      toast.success('Pet deleted');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
