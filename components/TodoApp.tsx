
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '@/redux/features/todosSlice';
import TodoList from './TodoList';
import { Button, TextField, Container, Paper } from '@mui/material';
import { FaPlus } from 'react-icons/fa';

const TodoApp = () => {
  const [newTodoText, setNewTodoText] = useState<string>('');
  const dispatch = useDispatch();

  useEffect(() => {
  }, []);

  const handleAddTodo = () => {
    if (newTodoText.trim() === '') {
      return;
    }
    const newTodo = { id: Date.now(), text: newTodoText, completed: false };
    console.log(newTodo);
    dispatch(addTodo(newTodo));
    setNewTodoText('');
  };

  return (
    <Container className=' space-y-4' component="main">
        <h1 className='p-4 font-thin text-center uppercase text-4xl text-white'>To-do list</h1>
        <div className='flex p-2 gap-2 bg-white rounded'>
          <TextField
            label="Add Todo"
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}/>
          <Button variant="contained" className=' gap-2 '  onClick={handleAddTodo}>
            <span><FaPlus/></span> <span>Add</span>
          </Button>
        </div>
        <div className='bg-white h-72 overflow-hidden overflow-y-scroll'>

        <TodoList />
        </div>
    </Container>
  );
};

export default TodoApp;
