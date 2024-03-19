import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface NotificationState {
  statusMessage: string | null;
}

const initialState: NotificationState = {
  statusMessage: null,
};

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        setStatusMessage(state, action: PayloadAction<string | null>) {
          state.statusMessage = action.payload;
        },
    },
    selectors: {
        selectStatusMessage: (state) => state.statusMessage,
    }
});

export const { selectStatusMessage } = notificationSlice.selectors;

export const { setStatusMessage } = notificationSlice.actions;

export default notificationSlice.reducer;
