import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "taskInput",
  // initialState:[],
  initialState: {
    list: [],
  },
  reducers: {
    addTask: (state, action) => {
      if (action.payload === "") {
        return;
      }
      state.list.push({
        id: state.list.length + 1,
        title: action.payload,
        color: null,
        isChecked:false,
      });
    },

    deleteTask: (state, action) => {
      const id = action.payload;
      if (id) {
        state.list = state.list.filter((ele) => ele.id !== id);
      }
    },
    updateColor: (state, action) => {
      const { id, color } = action.payload;
      console.log(color);
      if (color) {
        state.list = state.list.map((list) =>
          list.id == id ? { ...list, color } : list
        );
      }
    },
    updateCheckbox: (state, action) => {
      const { id, checked } = action.payload;
      console.log(checked);
      state.list = state.list.map((list) =>
        list.id == id ? { ...list, isChecked: checked } : list
      );
    },

    markallcompleted: (state, action) => {
      state.list = state.list.map((list) => {
        if (list.isChecked !== true) {
          list.isChecked = true;
        }
        return list; // ternary
        // or
        // state.list.map((list) => {...list , checked:true})
      });
    },
    clearcompleted: (state) => {
      state.list = state.list.filter((list) => list.isChecked !== true);
    },
  },
});

export const {
  addTask,
  deleteTask,
  updateColor,
  updateCheckbox,
  markallcompleted,
  clearcompleted,
} = taskSlice.actions;

export default taskSlice.reducer;
