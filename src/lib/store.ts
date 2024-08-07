import { configureStore } from '@reduxjs/toolkit';
import { reviewsReducer } from '@/features/Home/Reviews/reviewsSlice';
import { portfoliosReducer } from '@/features/Home/OurWorks/portfoliosSlice';
import { foundersReducer } from '@/features/AboutUs/Founders/foundersSlice';
import { vacanciesReducer } from '@/features/AboutUs/Vacancies/vacanciesSlice';
import { servicesReducer } from '@/features/Home/Services/servicesSlice';
import { servicePageReducer } from '@/features/Service/serviceSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      reviews: reviewsReducer,
      portfolios: portfoliosReducer,
      founders: foundersReducer,
      vacancies: vacanciesReducer,
      services: servicesReducer,
      servicePage: servicePageReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
