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

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const petsSlice = createSlice({
  name: 'pets',
  initialState: petsInitialState,

  extraReducers: builder => {
    builder
      .addCase(fetchPets.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.pets = payload.pets;
        console.log('State before modification:', state.pets);
      })
      .addCase(addPet.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.pets.push(payload);
      })
      .addCase(deletePet.fulfilled, (state, { payload }) => {
        console.log('Payload:', payload);
        console.log('State before modification:', state);
        state.isLoading = false;

        state.pets = state.pets.filter(pet => pet._id !== payload._id);

        console.log('State after modification:', state.pets);

        // const index = state.pets.findIndex(
        //   pet => pet._id === payload
        // );
        // state.pets.splice(index, 1);
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
