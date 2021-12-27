import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a lobortis metus. ",
      id: 1,
      completed: false,
    },
    {
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a lobortis metus. ",
      id: 2,
      completed: false,
    },
    {
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a lobortis metus. ",
      id: 3,
      completed: false,
    },
    {
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a lobortis metus. ",
      id: 4,
      completed: false,
    },
    {
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a lobortis metus.",
      id: 5,
      completed: false,
    },
    {
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a lobortis metus.",
      id: 6,
      completed: false,
    },
    {
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a lobortis metus.",
      id: 7,
      completed: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTodo: (state, action) => {
      const removedArr = [...state.items].filter(
        (todo) => todo.id !== action.payload
      );
      state.items = removedArr;
    },
    changeStatus: (state, action) => {
      const { id } = action.payload;
      const filtered = state.items.find((todo) => todo.id == id);
      filtered.completed = !filtered.completed;
    },
    removeCompleted: (state, action) => {
      const filtered = state.items.filter((todo) => todo.completed === false);
      state.items = filtered;
    },
    selectAll: (state, action) => {
      const filtered = state.items.forEach((todo) => (todo.completed = true));
    },
  },
});

export const { addTodo, deleteTodo, changeStatus, removeCompleted, selectAll } =
  todoSlice.actions;
export default todoSlice.reducer;
