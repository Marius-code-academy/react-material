import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
  isLoading: false,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addTodoAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addTodoAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todos.push(action.payload);
      })
      .addCase(addTodoAsync.rejected, (state) => {
        state.isLoading = false;
        console.log("rejected");
      });
  },
});

export const addTodoAsync = createAsyncThunk("todos/addTodosAsync", async (data) => {
  const { data: responseData } = await axios.post("https://jsonplaceholder.typicode.com/todos", {
    title: data.title,
    completed: false,
  });
  return responseData;
});

export const { addTodo } = todosSlice.actions;

export default todosSlice.reducer;
