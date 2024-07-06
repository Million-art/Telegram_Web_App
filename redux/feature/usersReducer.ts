
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import { User } from '@/types/page';

// Define the initial state using the User type
const initialState: User[] = [];

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      // Modify the state to add a new user
      state.push(action.payload);
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      // Modify the state to delete a user by its _id
      return state.filter((user) => user._id !== action.payload);
    },
  },
});

export const { addUser, deleteUser } = userSlice.actions;

export const selectUsers = (state: RootState) => state.users;

export default userSlice.reducer;