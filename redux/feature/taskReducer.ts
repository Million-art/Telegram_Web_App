import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
interface MyTask {
  _id: string;
  company: String;
  telegramChannel: String;
  telegramGroup: String;
  facebook: String;
  web: String;
  instagram: String;
  twitter: String;
  linkedin: String;
  price: Number;
}
// Define the initial state using the MyTask type
const initialState: MyTask[] = [];

export const fetchTasks = createAsyncThunk(
  'task/fetchTasks',
  async () => {
    // Implement the logic to fetch tasks from the server
    const response = await fetch('/api/task');
    const tasks = await response.json();
    return tasks;
  }
);

export const deleteTask= createAsyncThunk(
  'task/deleteTask',
  async (taskId: string) => {
    // Implement the logic to delete the task from the server
    await fetch(`/api/task/${taskId}`, {
      method: 'DELETE'
    });
    return taskId;
  }
);

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<MyTask>) => {
      state.push(action.payload);
    },
    
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(deleteTask.fulfilled, (state, action) => {
      return state.filter((task) => task._id !== action.payload);
    });
  },
});

export const { addTask } = taskSlice.actions;

export const selectTasks = (state: RootState) => state.tasks;

export default taskSlice.reducer;