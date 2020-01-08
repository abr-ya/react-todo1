import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({text, important = false}) => {
	const itemClickHandler = (text) => {
		console.log('click', text);
	}
	
	const liStyle = {
		color: important ? 'steelblue' : 'black',
		fontWeight: important ? 'bold' : 'normal',
	}

	return (
		<li className="list-group-item todo-list-item" style={liStyle}>
			<span className="todo-list-item-label" onClick={() => itemClickHandler(text) }>
				{text}
			</span>

			<button type="button" className="btn btn-outline-success btn-sm float-right">
				<i className="fa fa-exclamation" />
			</button>

			<button type="button" className="btn btn-outline-danger btn-sm float-right">
				<i className="fa fa-trash-o" />
			</button>
		</li>
	);
}

export default TodoListItem;