import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskList: [],
  filter: "all",
};

const dataSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setTaskList: (state, action) => {
      state.taskList = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setTaskList, setFilter } = dataSlice.actions;

export default dataSlice.reducer;
