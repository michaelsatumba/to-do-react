import { Button, List, ListItem, ListItemText } from '@mui/material';
import './Todo.css';
import React from 'react';
import db from './firebase';
import DeleteIcon from '@mui/icons-material/Delete';

function Todo(props) {
	return (
		<List className="todo__list">
			<ListItem>
				<ListItemText primary={props.todo.todo} />
			</ListItem>
			<Button
				color="error"
				onClick={(event) => db.collection('todos').doc(props.todo.id).delete()}
			>
				<DeleteIcon></DeleteIcon> delete me
			</Button>
		</List>
	);
}

export default Todo;
