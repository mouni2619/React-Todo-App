import React from "react";
// TodoList component responsible for adding new todo items
function TodoList({ taskName, description, addTodo, setTaskName, setDescription }) {
    return (
        <div className='todolist'>
            {/* Input field for entering todo name */}
            <input 
                type="text" 
                className="maininp" 
                placeholder="Todo Name" 
                value={taskName} // Value of the input field is set to the taskName prop
                onChange={(e) => setTaskName(e.target.value)} // onChange event updates the task name state
            />
            {/* Input field for entering todo description */}
            <input 
                type="text" 
                className="maininp" 
                placeholder="Todo Description" 
                value={description} // Value of the input field is set to the description prop
                onChange={(e) => setDescription(e.target.value)} // onChange event updates the description state
            />
            {/* Button to add new todo */}
            <button 
                type="button" 
                className="btn btn-primary addtodobutton" 
                onClick={addTodo} // onClick event triggers the addTodo function to add the todo
            >
                Add Todo
            </button>
        </div>
    );
}

export default TodoList;
