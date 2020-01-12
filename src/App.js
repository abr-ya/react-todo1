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
	const [searchValue, setSearchValue] = useState("");
	const [filterStatus, setFilterStatus] = useState("all");

	// остались и сделаны - без скрытых
	const countItem = data.filter((item) => !item.hide).length;
	const countDone = data
		.filter((item) => !item.hide)
		.filter((item) => item.done).length;

	// фильтрация элементов по поисковой фразе
	const search = (data, searchValue) => {
		return data.map(item => {
			if (item.text.toUpperCase().indexOf(searchValue.toUpperCase()) === -1 && searchValue !== "") {
				return {...item, hide: true}
			} else {
				return item
			}
		});
	}
	//console.log(search(data, searchValue));

	// фильтрация элементов по статусу
	const filter = (data, filterStatus) => {
		if (filterStatus === "all") {
			return data;
		} else if (filterStatus === "active") {
			return data.map(item => {
				if (item.done) {
					return {...item, hide: true}
				} else {
					return item
				}
			});
		} else if (filterStatus === "done") {
			return data.map(item => {
				if (!item.done) {
					return {...item, hide: true}
				} else {
					return item
				}
			});
		}
	}
	//console.log(filter(search(data, searchValue), filterStatus));	

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
				<SearchPanel setSearchValue={setSearchValue} />
				<ItemFilter filterStatus={filterStatus} setFilterStatus={setFilterStatus} />
			</div>
			<TodoList data={filter(search(data, searchValue), filterStatus)} itemMethod={itemMethod} />
			<ItemAdd addItem={addItem} />
		</div>
	);
}

export default App;
