import React, { useState, useEffect } from 'react'
import Item from './Item'

const Todo = () => {

    const [task, setTask] = useState("");
    const [todos, setTodos] = useState( JSON.parse(localStorage.getItem("todos")) || [],);

    // enter task
    const handleChange = (e) => {
        setTask(e.target.value);
    }

    //add the task in object array then place it in setTodos
    const handleAddTask = () => {
        if(!task.trim()) return;

        const newTodo = todos.map((todo) => ({...todo}));
        newTodo.push({
            value: task,
            isCompleted: false,
            id: new Date().getTime(),
        });

        console.log("New Todo -------->", newTodo);
        setTodos(newTodo);
        setTask("");
    }

    //add task even on clicking Enter
    const handleKeyDown = (e) => {
        if(e.key === "Enter") {
            handleAddTask();
        }
    }

    //handle deleting task
    const handleDelete = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    //handle completing the task
    const handleComplete = (id) => {
        setTodos(
            todos.map((todo) => 
                todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo,
        ),
        );
    }

    //useEffect storage
    //useEffect(() => {
    //    localStorage.setItem("todos", JSON.stringify(todos));
    //}, [todos]);

  return (
    <>
    <div className="todo-container">
        <h1 className="todo-title">Todo List</h1>
        <div className="input-container">
            <input type="text" 
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                className='todo-input'
                placeholder='Add a new task...'
                />
            <button className="add-button" 
                onClick={handleAddTask}>
                Add Task
            </button>
        </div>
        <div className="todos-list">
            { todos.map((todo) => (
                <Item key={todo.id}
                todo={todo}
                handleComplete={handleComplete}
                handleDelete={handleDelete}
                />
            ))}
        </div>
    </div>
    </>
  )
}

export default Todo