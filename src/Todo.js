import { List, ListItem, ListItemText } from '@mui/material';
import './Todo.css';
import React from 'react';

function Todo(props) {
	return (
		<List className="todo__list">
			<ListItem>
				<ListItemText primary={props.text} secondary="deadline" />
			</ListItem>
		</List>
	);
}

export default Todo;