import { FaBeer, FaTrash } from "react-icons/fa";
import { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { Todo } from './types';
import { toggleTodo, deleteTodo } from '@/redux/features/todosSlice';
import {
  List,
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  ListItemSecondaryAction,
} from '@mui/material';

interface TodoListProps {}

const TodoList: FunctionComponent<TodoListProps> = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos.todos);

  const handleToggle = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const handleDelete = (id: number) => {
    dispatch(deleteTodo(id));
  };

  return (
    <List className="bg-blue-200 rounded-xl space-y-2">
      {todos.map((todo) => (
        <ListItem className=" " key={todo.id} dense button>
          <ListItemText primary={todo.text} />
          <ListItemSecondaryAction className=" flex items-center text-sm">
            <IconButton onClick={() => handleDelete(todo.id)}  edge="end" >
              <FaTrash/>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;

