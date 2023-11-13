'use client'
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
  id: number;
  text: string;
}

interface TodosState {
  list: Todo[];
}

const initialState: TodosState = {
  list: [],
};
const storedTodos = typeof window !== 'undefined' ? localStorage.getItem('todos') : null;
if (storedTodos) {
  initialState.list = JSON.parse(storedTodos);
}
const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: state.list.length + 1,
        text: action.payload,
      };
      state.list.push(newTodo);
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action: PayloadAction<{ id: number; text: string }>) => {
      const todoToUpdate = state.list.find((todo) => todo.id === action.payload.id);
      if (todoToUpdate) {
        todoToUpdate.text = action.payload.text;
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todosSlice.actions;

export default todosSlice.reducer;