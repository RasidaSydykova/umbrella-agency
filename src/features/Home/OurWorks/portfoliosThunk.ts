import { createAsyncThunk } from '@reduxjs/toolkit';
import { Portfolio } from '../../../../types';
import axios from 'axios';

export const fetchPortfolios = createAsyncThunk<Portfolio[]>(
  'portfolios/fetchPortfolios',
  async () => {
    const response = await axios.get('http://16.170.240.179/api/v1/portfolio/get/');
    return response.data;
  },
);
