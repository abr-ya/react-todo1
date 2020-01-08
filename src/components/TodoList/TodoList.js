import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.css';

const TodoList = ({data}) => {
    console.log(data);

    let elements = [];
    if (Array.isArray(data) && data.length) {
        elements = data.map((item, index) => (
			<TodoListItem {...item} key={index} />
		))
    }

    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>   
    )
}

export default TodoList;
