import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ServicePage } from '../../../types';

export const fetchServicePage = createAsyncThunk<ServicePage[]>(
  'servicePage/fetchServicePage',
  async () => {
    const response = await axios.get('http://34.176.229.246/api/v1/service/get/');
    return response.data;
  },
);
