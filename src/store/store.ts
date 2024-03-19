import { configureStore } from '@reduxjs/toolkit';
import notificationSlice from './slices/notificationSlice';
import { requestApi } from 'services/request';

export const store = configureStore({
  reducer: {
    notification: notificationSlice,
    [requestApi.reducerPath]: requestApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(requestApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
