import React from 'react';
import cn from 'classnames';
import './TodoListItem.css';

const TodoListItem = ({item, itemMethod, index}) => {
	const {done, important} = item;

	const itemClickHandler = (index) => {
		itemMethod.onToggleDone(index);
	}

	const importantClickHandler = (e, index) => {
		e.stopPropagation();
		itemMethod.onToggleImportant(index);
	}

	const deleteClickHandler = (e, index) => {
		e.stopPropagation();
		itemMethod.setHide(index);
	}

	return (
		<li className={cn("list-group-item", "todo-list-item", {
			"done": done, "important": important, // класс - условие
		  })} onClick={() => itemClickHandler(index)} >
			<span className="todo-list-item-label">
				{item.text}
			</span>

			<button type="button" className="btn btn-outline-success btn-sm float-right" onClick={(e) => importantClickHandler(e, index)} >
				<i className="fa fa-exclamation" />
			</button>

			<button type="button" className="btn btn-outline-danger btn-sm float-right" onClick={(e) => deleteClickHandler(e, index)} >
				<i className="fa fa-trash-o" />
			</button>
		</li>
	);
}

export default TodoListItem;