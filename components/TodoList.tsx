

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
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import { FaTrash } from 'react-icons/fa';

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

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const updatedTodos = Array.from(todos);
    const [reorderedItem] = updatedTodos.splice(result.source.index, 1);
    updatedTodos.splice(result.destination.index, 0, reorderedItem);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <List {...provided.droppableProps} ref={provided.innerRef}>
            {todos.map((todo, index) => (
              <Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
                {(provided) => (
                  <ListItem
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    button
                  >
                    <Checkbox
                      checked={todo.completed}
                      onChange={() => handleToggle(todo.id)}
                      inputProps={{ 'aria-labelledby': `todo-item-${todo.id}` }}
                    />
                    <ListItemText primary={todo.text} />
                    <ListItemSecondaryAction>
                      <IconButton onClick={() => handleDelete(todo.id)} edge="end" aria-label="delete">
                       <span className='text-lg text-red-600'><FaTrash/></span> 
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </List>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TodoList;
