import { configureStore } from '@reduxjs/toolkit';
import notificationSlice from './slices/notificationSlice';
import { requestApi } from 'services/request';
import { userApi } from 'services/user';
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    notification: notificationSlice,
    user: userReducer,
    [requestApi.reducerPath]: requestApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(requestApi.middleware, userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
