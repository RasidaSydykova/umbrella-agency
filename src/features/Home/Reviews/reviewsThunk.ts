import { createAsyncThunk } from '@reduxjs/toolkit';
import { Review } from '../../../../types';
import axios from 'axios';

export const fetchReviews = createAsyncThunk<Review[]>('reviews/fetchReviews', async () => {
  const response = await axios.get('http://34.176.229.246/api/v1/reviews/get/');
  return response.data;
});
