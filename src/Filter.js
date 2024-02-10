import React from "react";

// Filter component responsible for filtering todo items based on status
function Filter({ filterTodos, statusFilter }) {
    return (
        <div className='labellist'>
            {/* Title */}
            <p className='para'>My Todos</p>
            <div>
                {/* Filter label */}
                <label className='filterhead'>Status Filter :</label>
                {/* Dropdown menu to select filter option */}
                <select
                    className='all'
                    value={statusFilter} // Value of the dropdown menu is set to the statusFilter prop
                    onChange={(e) => filterTodos(e.target.value)} // onChange event triggers filterTodos function with the selected value
                >
                    {/* Options for different filter statuses */}
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="notCompleted">Not Completed</option>
                </select>
            </div>
        </div>
    );
}

export default Filter;
