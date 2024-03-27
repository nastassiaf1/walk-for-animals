import { createSlice } from '@reduxjs/toolkit';
import { User, UserIndividual } from 'interfaces/User';

const initialState: { currentUser: User | UserIndividual | null } = {
    currentUser: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.currentUser = action.payload;
    },
    logoutUser: (state) => {
      state.currentUser = null;
    },
  },
});

export const { setUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
