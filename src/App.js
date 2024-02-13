import React, { useState } from 'react';
import './App.css';
import Todo from "./Todo"
import Filter from "./Filter"
import TodoList from "./TodoList"

function App() {
  // State variables
  const [todos, setTodos] = useState(() => {
    const storedTodos  = localStorage.getItem("todos");
    return storedTodos  ? JSON.parse(storedTodos ) : [];
  });
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [editTodo, setEditTodo] = useState(null);
  const [editedTaskName, setEditedTaskName] = useState('');
  const [editedDescription, setEditedDescription] = useState('');

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);


  useEffect(() => {
    if (todos.length === 0) {
      // If there are no todos, add default todos
      const defaultTodos = [
        { id: 1, taskName: 'Default Todo 1', description: 'This is the first default todo', completed: false },
        { id: 2, taskName: 'Default Todo 2', description: 'This is the second default todo', completed: false },
        { id: 3, taskName: 'Default Todo 3', description: 'This is the third default todo', completed: false }
      ];
      setTodos(defaultTodos);
    }
  }, [todos]);
  
  // Function to add a new todo
  const addTodo = () => {
    if (taskName.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        taskName,
        description,
        completed: false
      };
      setTodos([...todos, newTodo]);
      setTaskName('');
      setDescription('');
    }
  };

  // Function to delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Function to toggle the status of a todo
  const toggleStatus = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Function to filter todos based on status
  const filterTodos = (status) => {
    setStatusFilter(status);
  };

  // Filtered todos based on status
  const filteredTodos = todos.filter(todo => {
    if (statusFilter === 'completed') {
      return todo.completed;
    } else if (statusFilter === 'notCompleted') {
      return !todo.completed;
    } else {
      return true;
    }
  });

  // Function to open edit modal
  const openEditModal = (todo) => {
    setEditTodo(todo);
    setEditedTaskName(todo.taskName);
    setEditedDescription(todo.description);
  };

  // Function to close edit modal
  const closeEditModal = () => {
    setEditTodo(null);
  };

  // Function to update todo
  const updateTodo = () => {
    setTodos(todos.map(todo =>
      todo.id === editTodo.id ? { ...todo, taskName: editedTaskName, description: editedDescription } : todo
    ));
    setEditTodo(null);
  };

  return (
    <div className="App">
      {/* Header */}
      <h1 className='mainhead'>My Todo</h1>
      {/* TodoList component to add new todos */}
      <TodoList taskName={taskName} description={description} addTodo={addTodo} setTaskName={setTaskName} setDescription={setDescription} />
      <br />
      <br />
      {/* Filter component to filter todos */}
      <Filter filterTodos={filterTodos} statusFilter={statusFilter}/>
      <br />
      {/* Todo component to display and manage todos */}
      <Todo todos={filteredTodos} editTodo={editTodo} editedTaskName={editedTaskName} setEditedTaskName={setEditedTaskName} editedDescription={editedDescription} setEditedDescription={setEditedDescription} updateTodo={updateTodo} closeEditModal={closeEditModal} deleteTodo={deleteTodo} openEditModal={openEditModal} toggleStatus={toggleStatus}/>
    </div>
  );
}

export default App;
