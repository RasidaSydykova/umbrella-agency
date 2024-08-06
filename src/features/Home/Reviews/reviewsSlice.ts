import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/lib/store';
import { Review } from '../../../../types';
import { fetchReviews } from '@/features/Home/Reviews/reviewsThunk';

interface ReviewsState {
  reviews: Review[];
  fetchLoading: boolean;
  error: boolean;
}

const initialState: ReviewsState = {
  reviews: [],
  fetchLoading: false,
  error: false,
};

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchReviews.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchReviews.fulfilled, (state, { payload: data }) => {
      state.fetchLoading = false;
      state.reviews = data;
    });
    builder.addCase(fetchReviews.rejected, (state) => {
      state.fetchLoading = false;
      state.error = true;
    });
  },
});

export const reviewsReducer = reviewsSlice.reducer;
export const selectReviews = (state: RootState) => state.reviews.reviews;
