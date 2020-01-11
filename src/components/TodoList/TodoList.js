import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.css';

const TodoList = ({data, itemMethod}) => {
    console.log(data);

    let elements = [];
    if (Array.isArray(data) && data.length) {
        // eslint-disable-next-line
        elements = data.map((item, index) => {
            if (!item.hide) {
                return (<TodoListItem item={item} key={index} itemMethod={itemMethod} index={index} />);
            }
        })
    }

    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>   
    )
}

export default TodoList;
