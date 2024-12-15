import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "taskInput",
  // initialState:[],
  initialState: {
    list: [],
  },
  reducers: {
    addTask: (state, action) => {
      if(action.payload === ""){
        return;
      }
      state.list.push({ id: state.list.length + 1, title: action.payload });

      console.log(action.payload);
    },
    deleteTask: (state, action) => {
      const id = action.payload;
      if (id) {
        state.list = state.list.filter((ele) => ele.id !== id);
      }
    },
    updateTask:(state,action) =>{

    }
  },
});

export const { addTask, deleteTask , updateTask} = taskSlice.actions;

export default taskSlice.reducer;
