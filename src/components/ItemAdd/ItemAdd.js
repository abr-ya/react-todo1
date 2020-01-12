import React, {useState} from 'react';
import './ItemAdd.css';

const ItemAdd = ({addItem}) => {
    //console.log(addItem);
    const [inputValue, setInputValue] = useState("");

    const nameChangeHandler = (e) => {
        setInputValue(e.target.value);
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();
        addItem(inputValue);
        setInputValue("");
    }    
    
    return (
        <form className="item-add-form mt-3 d-flex"
            onSubmit={formSubmitHandler}>
            <input type="text"
                className="form-control"
                onChange={nameChangeHandler}
                placeholder="что делать?"
                value={inputValue}
            />
            <button className="btn btn-outline-secondary">
                ItemAdd
            </button>
        </form>
    )
}

export default ItemAdd;
