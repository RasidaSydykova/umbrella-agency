import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ServicePage } from '../../../types';

export const fetchServicePage = createAsyncThunk<ServicePage[]>(
  'servicePage/fetchServicePage',
  async () => {
    const response = await axios.get('http://16.170.240.179/api/v1/service/get/');
    return response.data;
  },
);
