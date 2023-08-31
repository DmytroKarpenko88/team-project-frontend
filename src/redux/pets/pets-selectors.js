// import { createSelector } from '@reduxjs/toolkit';

export const selectPets = state => state.pets;

export const selectIsLoading = state => state.pets.isLoading;
export const selectError = state => state.pets.error;
export const selectFilter = state => state.filter;
