import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/lib/store';
import { ServicePage } from '../../../types';
import { fetchServicePage } from '@/features/Service/serviceThunk';

interface ServicePageState {
  servicePage: ServicePage[];
  fetchLoading: boolean;
  error: boolean;
}

const initialState: ServicePageState = {
  servicePage: [],
  fetchLoading: false,
  error: false,
};

export const servicePageSlice = createSlice({
  name: 'servicePage',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchServicePage.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchServicePage.fulfilled, (state, { payload: data }) => {
      state.fetchLoading = false;
      state.servicePage = data;
    });
    builder.addCase(fetchServicePage.rejected, (state) => {
      state.fetchLoading = false;
      state.error = true;
    });
  },
});

export const servicePageReducer = servicePageSlice.reducer;
export const selectServicePage = (state: RootState) => state.servicePage.servicePage;
