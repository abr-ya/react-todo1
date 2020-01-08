import React from 'react';
import './App.css';
import AppHeader from './components/AppHeader/AppHeader';
import SearchPanel from './components/SearchPanel/SearchPanel';
import TodoList from './components/TodoList/TodoList';
import ItemFilter from './components/ItemFilter/ItemFilter';

const App = () => {
	const todoData = [
		{text: 'Мапнуть массив', important: false},
		{text: 'Learn React', important: true},
		{text: 'Build Awesome App', important: false},
	];

	return (
		<div className="todo-app">
			<AppHeader toDo={1} done={3} />
			<div className="top-panel d-flex">
				<SearchPanel />
				<ItemFilter />
			</div>
			<TodoList data={todoData} />
		</div>
	);
}

export default App;
