import { createAsyncThunk } from '@reduxjs/toolkit';
import { Founder, Service } from '../../../../types';
import axios from 'axios';

export const fetchServices = createAsyncThunk<Service[]>('services/fetchServices', async () => {
  const response = await axios.get('http://16.170.240.179/api/v1/service/main_page/');
  return response.data;
});
