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
					snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
				);
			});
	}, []);

	const addToDo = (e) => {
		e.preventDefault();

		db.collection('todos').add({
			todo: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});

		// setTodos([...todos, input]);
		setInput('');
	};

	return (
		<div className="app">
			<h1>Welcome to my {Math.floor(Math.random() * 10)} 🚀</h1>

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
		</div>
	);
}

export default App;
