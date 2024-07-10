import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoadingState {
  isLoading: boolean;
}

const initialState: boolean  = false


export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading: (state, action:PayloadAction<boolean> ) => {
      return action.payload
    } 
  }
});

export const { setLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
