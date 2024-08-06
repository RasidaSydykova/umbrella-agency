import { createAsyncThunk } from '@reduxjs/toolkit';
import { Founder } from '../../../../types';
import axios from 'axios';

export const fetchFounders = createAsyncThunk<Founder[]>('founders/fetchFounders', async () => {
  const response = await axios.get('http://16.170.240.179/api/v1/about_page/get/');
  return response.data;
});
