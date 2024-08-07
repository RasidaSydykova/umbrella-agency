import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/lib/store';
import { Founder, Service } from '../../../../types';
import { fetchFounders } from '@/features/AboutUs/Founders/foundersThunk';
import { fetchServices } from '@/features/Home/Services/servicesThunk';

interface ServicesState {
  services: Service[];
  fetchLoading: boolean;
  error: boolean;
}

const initialState: ServicesState = {
  services: [],
  fetchLoading: false,
  error: false,
};

export const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchServices.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchServices.fulfilled, (state, { payload: data }) => {
      state.fetchLoading = false;
      state.services = data;
    });
    builder.addCase(fetchServices.rejected, (state) => {
      state.fetchLoading = false;
      state.error = true;
    });
  },
});

export const servicesReducer = servicesSlice.reducer;
export const selectServices = (state: RootState) => state.services.services;