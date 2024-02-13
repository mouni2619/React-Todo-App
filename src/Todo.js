import React from "react";
// Todo component responsible for rendering individual todo items
function Todo({
  todos, // Array of todo items
  editTodo, // Todo item being edited (if any)
  editedTaskName, // Edited task name
  setEditedTaskName, // Function to update edited task name
  editedDescription, // Edited description
  setEditedDescription, // Function to update edited description
  updateTodo, // Function to update todo item
  closeEditModal, // Function to close edit modal
  deleteTodo, // Function to delete todo item
  openEditModal, // Function to open edit modal
  toggleStatus, // Function to toggle todo status
}) {
  return (
    <div className="todo-list">  
      {/* Map over todos array and render individual todo cards */}
      {todos.map((todo) => (
        <div key={todo.id} className="todo-card">
          {/* If current todo is being edited, render edit mode */}
          {editTodo && editTodo.id === todo.id ? (
            <div className="edit-mode">
              <h6 style={{textAlign:"center", color:"red", textDecoration:"underline"}}>EDIT DATA</h6>
              <label htmlFor="editedTaskName">Name:</label>
              {/* Input field to edit task name */}
              <input
                type="text"
                id="editedTaskName"
                value={editedTaskName}
                onChange={(e) => setEditedTaskName(e.target.value)}
              />
              <label htmlFor="editedDescription">Description:</label>
              {/* Input field to edit description */}
              <input
                type="text"
                id="editedDescription"
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
              />
              {/* Buttons to submit changes or cancel editing */}
              <div className="edittwobuttons">
                <button className="submit" onClick={updateTodo}>
                  Submit
                </button>
                <button className="cancel" onClick={closeEditModal}>
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            /* If todo is not being edited, render todo details */
            <div>
              {/* Display task name */}
              <h3 className="cardfont">Name: {todo.taskName}</h3>
              {/* Display task description */}
              <p className="cardfont">Description: {todo.description}</p>
              {/* Dropdown menu to toggle todo status */}
              <p className="cardfont">
                Status
                <select
                  className="Completed com"
                  value={todo.completed ? "completed" : "notCompleted"}
                  onChange={() => toggleStatus(todo.id)}
                  style={{
                    backgroundColor: todo.completed
                      ? "rgb(24, 152, 101)"
                      : "#EE959E",
                  }}
                >
                  <option value="completed" className="Completed">
                    Completed
                  </option>
                  <option value="notCompleted" className="Not-Completed">
                    Not Completed
                  </option>
                </select>
              </p>
              {/* Buttons to edit or delete todo */}
              <div className="lastbuttons">
                <button className="editbutton" onClick={() => openEditModal(todo)}>
                  Edit
                </button>
                <button className="deletebutton" onClick={() => deleteTodo(todo.id)}>
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      ))}    
    </div>
  );
}

export default Todo;
