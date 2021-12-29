import { Button, FormControl, Input, InputLabel } from '@mui/material';
import { useState } from 'react';
import './App.css';
import Todo from './Todo';

function App() {
	const [todos, setTodos] = useState(['Hello']);
	const [input, setInput] = useState('');

	const addToDo = (e) => {
		e.preventDefault();

		setTodos([...todos, input]);
		setInput('');
	};

	return (
		<div className="app">
			<h1>Welcome to my to-do-list</h1>

			<form>
				<FormControl>
					<InputLabel>Write a to do</InputLabel>
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
