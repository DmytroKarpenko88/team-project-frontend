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
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);

export const addPet = createAsyncThunk(
  'pets/addPet',
  async (newPet, thunkAPI) => {
    // console.log('newPet:', newPet);
    try {
      const { data } = await axios.post('/api/pets/add', newPet);
      toast.success('Pet added', { position: 'bottom-right' });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);

// export const deletePet = createAsyncThunk(
//   'pets/deletePet',
//   async (petId, thunkAPI) => {
//     console.log('Received petId for deletion:', petId);
//     try {
//       const { data } = await axios.delete(`/api/pets/delete/${petId}`);
//       toast.success('Pet deleted', { position: 'bottom-right' });
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.massage);
//     }
//   }
// );

export const deletePet = createAsyncThunk(
  'pets/deletePet',
  async (petId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/api/pets/delete/${petId}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
