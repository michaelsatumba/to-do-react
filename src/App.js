import { Button, FormControl, Input, InputLabel } from '@mui/material';
import { useEffect, useState } from 'react';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState('');

	useEffect(() => {
		// this code fires when app.js loads

		db.collection('todos')
			.orderBy('timestamp', 'desc')
			.onSnapshot((snapshot) => {
				setTodos(
					snapshot.docs.map((doc) => ({
						id: doc.id,
						todo: doc.data().todo,
						complete: doc.data().complete,
					}))
				);
			});
	}, []);

	const addToDo = (e) => {
		e.preventDefault();

		db.collection('todos').add({
			todo: input,
			complete: false,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});

		// setTodos([...todos, input]);
		setInput('');
	};

	return (
		<div className="app">
			<h1>Welcome to my todo list! 🚀</h1>
			<form>
				<FormControl>
					<InputLabel>✅ Write a todo</InputLabel>
					<Input
						value={input}
						type="text"
						onChange={(e) => setInput(e.target.value)}
					/>
				</FormControl>

				<Button
					disabled={!input}
					onClick={addToDo}
					type="submit"
					variant="contained"
				>
					Add
				</Button>
			</form>

			<h2>List of todos</h2>
			{todos.map((todo) => (
				<Todo todo={todo} />
			))}
			<footer>👨‍💻 Made by Michael Satumba with React & Firebase</footer>
		</div>
	);
}

export default App;
