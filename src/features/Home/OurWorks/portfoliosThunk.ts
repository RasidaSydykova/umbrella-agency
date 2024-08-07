import { createAsyncThunk } from '@reduxjs/toolkit';
import { Portfolio } from '../../../../types';
import axios from 'axios';

export const fetchPortfolios = createAsyncThunk<Portfolio[]>(
  'portfolios/fetchPortfolios',
  async () => {
    const response = await axios.get('http://34.176.229.246/api/v1/portfolio/get/');
    return response.data;
  },
);
