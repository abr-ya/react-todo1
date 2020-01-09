import React, {useState} from 'react';
import cn from 'classnames';
import './TodoListItem.css';

const TodoListItem = ({text, important = false}) => {
	const [done, setDone] = useState(false);

	const itemClickHandler = (id, text) => {
		console.log(id);
		//console.log('click', text);
		//console.log(done);
		setDone(!done);
	}

	const importantClickHandler = (e) => {
		e.stopPropagation();
		console.log('!');
	}

	const deleteClickHandler = (e) => {
		e.stopPropagation();
		console.log('del');
	}
	
	const liStyle = {
		color: important ? 'steelblue' : 'black',
		fontWeight: important ? 'bold' : 'normal',
	}

	return (
		<li className={cn("list-group-item", "todo-list-item", {
			"done": done, // класс - условие
		  })} style={liStyle} onClick={() => itemClickHandler(1, text)} >
			<span className="todo-list-item-label">
				{text}
			</span>

			<button type="button" className="btn btn-outline-success btn-sm float-right" onClick={(e) => importantClickHandler(e)} >
				<i className="fa fa-exclamation" />
			</button>

			<button type="button" className="btn btn-outline-danger btn-sm float-right" onClick={(e) => deleteClickHandler(e)} >
				<i className="fa fa-trash-o" />
			</button>
		</li>
	);
}

export default TodoListItem;