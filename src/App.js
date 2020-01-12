import React, {useState} from 'react';
import './App.css';
import AppHeader from './components/AppHeader/AppHeader';
import SearchPanel from './components/SearchPanel/SearchPanel';
import TodoList from './components/TodoList/TodoList';
import ItemFilter from './components/ItemFilter/ItemFilter';
import ItemAdd from './components/ItemAdd/ItemAdd';

const App = () => {
	const todoData = [
		{id: 1, text: 'Мапнуть массив', important: false},
		{id: 2, text: 'Learn React', important: true},
		{id: 3, text: 'Build Awesome App', important: false},
	];

	const [data, setData] = useState(todoData);
	//const [searchValue, setSearchValue] = useState("");

	const countItem = data.length;
	const countDone = data.filter((item) => item.done).length;

	const setHide = (index) => {
		const newData = [...data];
		newData[index].hide = true;
		setData(newData);
	}

	const addItem = (text) => {
		const newItem = {id: 4, text, important: false};
		setData([...data, newItem]);
	}

	const onToggleDone = (index) => {
		//console.log('Done', index);
		const newData = [...data];
		newData[index].done = !data[index].done;
		setData(newData);
	}

	const onToggleImportant = (index) => {
		//console.log('Important', index);
		const newData = [...data];
		newData[index].important = !data[index].important;
		setData(newData);				
	}

	const itemMethod = {
		onToggleDone,
		onToggleImportant,
		setHide,
	}

	return (
		<div className="todo-app">
			<AppHeader toDo={countItem - countDone} done={countDone} />
			<div className="top-panel d-flex">
				<SearchPanel />
				<ItemFilter />
			</div>
			<TodoList data={data} itemMethod={itemMethod} />
			<ItemAdd addItem={addItem} />
		</div>
	);
}

export default App;
