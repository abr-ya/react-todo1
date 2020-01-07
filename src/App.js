import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel/SearchPanel';
import TodoList from './components/TodoList/TodoList';

function App() {
	return (
		<div className="App">
			<AppHeader />
			<SearchPanel />
			<TodoList />
		</div>
	);
}

export default App;
