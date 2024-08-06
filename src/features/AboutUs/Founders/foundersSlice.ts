import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/lib/store';
import { Founder } from '../../../../types';
import { fetchFounders } from '@/features/AboutUs/Founders/foundersThunk';

interface FoundersState {
  founders: Founder[];
  fetchLoading: boolean;
  error: boolean;
}

const initialState: FoundersState = {
  founders: [],
  fetchLoading: false,
  error: false,
};

export const foundersSlice = createSlice({
  name: 'founders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFounders.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchFounders.fulfilled, (state, { payload: data }) => {
      state.fetchLoading = false;
      state.founders = data;
    });
    builder.addCase(fetchFounders.rejected, (state) => {
      state.fetchLoading = false;
      state.error = true;
    });
  },
});

export const foundersReducer = foundersSlice.reducer;
export const selectFounders = (state: RootState) => state.founders.founders;
