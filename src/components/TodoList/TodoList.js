import React from 'react';

const TodoList = (props) => {
    console.log(props);
    const items = ['Мапнуть массив', 'Learn React', 'Build Awesome App']
    return (
        <ul>
            {(Array.isArray(items) && items.length)
				? items.map(item => (
					<li>{item}</li>
				))
				: null
			}
        </ul>
    )
}

export default TodoList;
