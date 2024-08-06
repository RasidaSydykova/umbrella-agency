import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/lib/store';
import { Portfolio } from '../../../../types';
import { fetchPortfolios } from '@/features/Home/OurWorks/portfoliosThunk';

interface PortfoliosState {
  portfolios: Portfolio[];
  fetchLoading: boolean;
  error: boolean;
}

const initialState: PortfoliosState = {
  portfolios: [],
  fetchLoading: false,
  error: false,
};

export const portfoliosSlice = createSlice({
  name: 'portfolios',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPortfolios.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchPortfolios.fulfilled, (state, { payload: data }) => {
      state.fetchLoading = false;
      state.portfolios = data;
    });
    builder.addCase(fetchPortfolios.rejected, (state) => {
      state.fetchLoading = false;
      state.error = true;
    });
  },
});

export const portfoliosReducer = portfoliosSlice.reducer;
export const selectPortfolios = (state: RootState) => state.portfolios.portfolios;
