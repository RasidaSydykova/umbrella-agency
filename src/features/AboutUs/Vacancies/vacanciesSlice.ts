import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/lib/store';
import { Vacancy } from '../../../../types';
import { fetchVacancies } from '@/features/AboutUs/Vacancies/vacanciesThunk';

interface VacanciesState {
  vacancies: Vacancy[];
  fetchLoading: boolean;
  error: boolean;
}

const initialState: VacanciesState = {
  vacancies: [],
  fetchLoading: false,
  error: false,
};

export const vacanciesSlice = createSlice({
  name: 'vacancies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchVacancies.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchVacancies.fulfilled, (state, { payload: data }) => {
      state.fetchLoading = false;
      state.vacancies = data;
    });
    builder.addCase(fetchVacancies.rejected, (state) => {
      state.fetchLoading = false;
      state.error = true;
    });
  },
});

export const vacanciesReducer = vacanciesSlice.reducer;
export const selectVacancies = (state: RootState) => state.vacancies.vacancies;
