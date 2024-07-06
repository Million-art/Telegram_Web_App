import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../feature/taskReducer';
import usersReducer from '../feature/usersReducer';

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    users: usersReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;