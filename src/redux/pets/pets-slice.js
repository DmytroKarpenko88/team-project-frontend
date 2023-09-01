import { createSlice } from '@reduxjs/toolkit';
import { addPet, deletePet, fetchPets } from './pets-operations';

const petsInitialState = {
  pets: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const petsSlice = createSlice({
  name: 'pets',
  initialState: petsInitialState,

  extraReducers: builder => {
    builder
      .addCase(fetchPets.fulfilled, (state, { payload }) => {
        state.error = null;
        state.pets = payload;

        state.isLoading = false;
      })
      .addCase(addPet.fulfilled, (state, { payload }) => {
        state.error = null;
        state.pets.push(payload);
        state.isLoading = false;
      })
      .addCase(deletePet.fulfilled, (state, { payload }) => {
        state.error = null;
        state.isLoading = false;
        state.pets = state.pets.filter(pet => pet._id !== payload.id);
      })
      .addCase(fetchPets.pending, handlePending)
      .addCase(addPet.pending, handlePending)
      .addCase(deletePet.pending, handlePending)
      .addCase(fetchPets.rejected, handleRejected)
      .addCase(addPet.rejected, handleRejected)
      .addCase(deletePet.rejected, handleRejected);
  },
});

export const petsReducer = petsSlice.reducer;
