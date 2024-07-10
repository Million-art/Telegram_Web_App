import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import { TaskStatus } from '@/types/page';
import { User } from '@tma.js/sdk';

interface MyTask {
  _id: string;
  company: string;
  telegramChannel: string | null;
  telegramGroup: string | null;
  facebook: string | null;
  web: string | null;
  instagram: string | null;
  twitter: string | null;
  linkedin: string | null;
  price: number;
  status: TaskStatus;
  claimedBy: User[];
}

// Define the initial state using the MyTask type
const initialState: { tasks: MyTask[] } = {
  tasks: [],
};

export const fetchTasks = createAsyncThunk(
  'task/fetchTasks',
  async () => {
    // Implement the logic to fetch tasks from the server
    const response = await fetch('/api/task');
    const tasks = await response.json();
    return tasks;
  }
);

export const deleteTask = createAsyncThunk(
  'task/deleteTask',
  async (taskId: string) => {
    // Implement the logic to delete the task from the server
    await fetch(`/api/task/${taskId}`, {
      method: 'DELETE',
    });
    return taskId;
  }
);

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<MyTask>) => {
      state.tasks.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.tasks = action.payload;
    });
    builder.addCase(deleteTask.fulfilled, (state, action) => {
      state.tasks = state.tasks.filter((task) => task._id !== action.payload);
    });
  },
});

export const { addTask } = taskSlice.actions;

export const selectTasks = (state: RootState) => state.tasks.tasks;

export default taskSlice.reducer;