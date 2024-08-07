import { createAsyncThunk } from '@reduxjs/toolkit';
import { Vacancy } from '../../../../types';
import axios from 'axios';

export const fetchVacancies = createAsyncThunk<Vacancy[]>('vacancies/fetchVacancies', async () => {
  const response = await axios.get('http://34.176.229.246/api/v1/about_page/get_vacancy/');
  return response.data;
});