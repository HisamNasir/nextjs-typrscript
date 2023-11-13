'use client'
import { FC, useState } from 'react';
import { Button, TextField } from '@mui/material';

interface TodoItemProps {
  id: number;
  text: string;
  onDelete: () => void;
  onUpdate: (text: string) => void;
}
const TodoItem: FC<TodoItemProps> = ({ id, text, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(text);

  const handleUpdate = () => {
    setIsEditing(false);
    onUpdate(updatedText);
  };
  return (
    <div>
      {isEditing ? (
        <div className='py-2 gap-4 flex w-full' >
          <TextField
            type="text"
            label="Edit Todo"
            variant="outlined"
            value={updatedText}
            onChange={(e) => setUpdatedText(e.target.value)}
          />
          <Button className='bg-blue-800' variant="contained" color="primary" onClick={handleUpdate}>
            Save
          </Button>
        </div>
      ) : (
        <div className='flex justify-between items-center'>
          <div><p >{text}</p></div>
          <div>
            <Button color="primary" onClick={() => setIsEditing(true)}>
              Update
            </Button>
            <Button color="secondary" onClick={onDelete}>
              Delete
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
