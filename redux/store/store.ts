import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../feature/taskReducer';
import usersReducer from '../feature/usersReducer';
import loadingReducer from '../feature/loadingReducer';

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    users: usersReducer,
    loading: loadingReducer,

  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;