import React from 'react';

const ItemFilter = ({filterStatus, setFilterStatus}) => {
    //console.log(filterStatus);
    const filterButtons = [
        {key: 'all', text: 'All'},
        {key: 'active', text: 'Active'},
        {key: 'done', text: 'Done'},
    ];
    const htmlButtons = filterButtons.map((button, index) => {
        const buttonClass = button.key === filterStatus
            ? "btn btn-info"
            : "btn btn-outline-secondary";
        return (
            <button type="button" className={buttonClass} key={button.key}
                onClick={() => setFilterStatus(button.key)}>
                    {button.text}
            </button>            
        )
    });
    return (<div className="btn-group">{htmlButtons}</div>);
}

export default ItemFilter;
