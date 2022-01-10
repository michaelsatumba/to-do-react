import {
	Button,
	FormControl,
	Input,
	InputLabel,
	List,
	ListItem,
	ListItemText,
	Modal,
} from '@mui/material';
import './Todo.css';
import React, { useState } from 'react';
import db from './firebase';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import firebase from 'firebase';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

function Todo(props) {
	const [open, setOpen] = useState(false);
	const [input, setInput] = useState('');

	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => setOpen(false);

	const updateTodo = () => {
		db.collection('todos').doc(props.todo.id).set(
			{
				todo: input,
			},
			{ merge: true }
		);
		setOpen(false);
	};

	return (
		<>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<form>
						<Input
							placeholder={props.todo.todo}
							value={input}
							type="text"
							onChange={(e) => setInput(e.target.value)}
						/>

						<Button
							// class="updateButton"
							onClick={updateTodo}
							type="submit"
							variant="contained"
							sx={{ m: 0.5 }}
						>
							Update Todo
						</Button>
					</form>
				</Box>
			</Modal>
			<List className="todo__list">
				<ListItem>
					<ListItemText primary={props.todo.todo} />
				</ListItem>
				<Button onClick={handleOpen}>Update todo</Button>
				<Button
					color="error"
					onClick={(event) =>
						db.collection('todos').doc(props.todo.id).delete()
					}
				>
					<DeleteIcon></DeleteIcon> delete me
				</Button>
			</List>
		</>
	);
}

export default Todo;
