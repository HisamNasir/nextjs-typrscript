'use client'
import { FC, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store';
import { addTodo, removeTodo, updateTodo } from '@/redux/features/todosSlice';
import TodoItem from './TodoItem';
import { Button, TextField } from '@mui/material';
const TodoList: FC = () => {
  const todos = useSelector((state: RootState) => state.todos.list);
  const dispatch = useDispatch<AppDispatch>();
  const [newTodoText, setNewTodoText] = useState<string>('');

  useEffect(() => {
    const storedTodos = typeof window !== 'undefined' ? localStorage.getItem('todos') : null;
    if (storedTodos) {
      dispatch({ type: 'todos/updateTodoList', payload: JSON.parse(storedTodos) });
    }
  }, [dispatch]);

  const handleAddTodo = () => {
    if (newTodoText.trim() !== '') {
      dispatch(addTodo(newTodoText));
      setNewTodoText('');
    }
  };
  return (
    <div className='border px-2 rounded w-full'>
      <div className='py-2 gap-4 flex'>
        <TextField
          className=''
          type="text"
          label="Enter new Todo"
          variant="outlined"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <Button variant="contained" className='bg-blue-900' onClick={handleAddTodo}>
          Add To List
        </Button>
      </div>
      {todos.length > 0 && (
        <div>
          {todos.map((todo) => (
            <div key={todo.id} className='my-2 bg-blue-50 rounded p-4'>
              <TodoItem
                id={todo.id}
                text={todo.text}
                onDelete={() => dispatch(removeTodo(todo.id))}
                onUpdate={(text) => dispatch(updateTodo({ id: todo.id, text }))}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoList;