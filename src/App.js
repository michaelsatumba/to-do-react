import { Button, FormControl, Input, InputLabel } from '@mui/material';
import { useEffect, useState } from 'react';
import './App.css';
import Todo from './Todo';
import db from './firebase';

function App() {
	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState('');

	useEffect(() => {
		// this code fires when app.js loads

		db.collection('todos').onSnapshot((snapshot) => {
			setTodos(snapshot.docs.map((doc) => doc.data().todo));
		});
	}, []);

	const addToDo = (e) => {
		e.preventDefault();

		setTodos([...todos, input]);
		setInput('');
	};

	return (
		<div className="app">
			<h1>Welcome to my {Math.floor(Math.random() * 60)} 🚀</h1>

			<form>
				<FormControl>
					<InputLabel>✅ Write a to do</InputLabel>
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
				<Todo text={todo} />
			))}
		</div>
	);
}

export default App;
