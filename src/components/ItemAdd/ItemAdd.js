import React from 'react';
import './ItemAdd.css';

const ItemAdd = ({addItem}) => {
    //console.log(addItem);
    
    return (
        <div className="item-add-form mt-3">
            <button className="btn btn-outline-secondary" onClick={() => addItem('Hello, World!')}>
                ItemAdd
            </button>
        </div>
    )
}

export default ItemAdd;
