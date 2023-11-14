
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
    <Container component="main" className='p-4' >
      <Paper className='p-4' elevation={8} >
        <h1 className='p-4 font-black text-4xl'>Todo App</h1>
        <div className=' bg-slate-100 rounded-xl'>
        
        <TodoList />
        <div className='flex p-4 gap-2 '>
          <TextField
            variant="outlined"
            label="Add Todo"
            fullWidth
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
          />
          <Button variant="contained" className=' gap-2 '  onClick={handleAddTodo}>
            <span><FaPlus/></span> <span>Add</span>
          </Button>
        </div>
        </div>
      </Paper>
    </Container>
  );
};

export default TodoApp;
