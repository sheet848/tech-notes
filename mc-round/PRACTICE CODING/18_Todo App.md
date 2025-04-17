```jsx
import React, { useState } from 'react';
import './styles.css'

const App = () => {

    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);

    const addTodo = (e) => {
        e.preventDefault();
        if(!task.trim()) return;
        setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
        setTask("");
    }

    const toggleComplete = (id) => {
        setTodos(
            todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo )
        )
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }
    
    return (
        <>
        <div className="todo-container">
            <h2>React Todo App</h2>
            <form onSubmit={addTodo}>
                <input type="input" placeholder="Add new task..." value={task} 
                     onChange={(e) => setTask(e.target.value)}/>
                <button type="submit">Add</button>
            </form>

            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id} className={todo.completed ? "completed" : ""}>
                            <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span>
                            <button onClick={() => deleteTodo(todo.id)}>X</button>
                        </li>
                    ))
                }
            </ul>
        </div>
        </>
    )
}

export default App
```

```css
body {
  font-family: sans-serif;
  -webkit-font-smoothing: auto;
  -moz-font-smoothing: auto;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: auto;
  text-rendering: optimizeLegibility;
  font-smooth: always;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}

h1 {
  font-size: 1.5rem;
}

.todo-container {
  width: 320px;
  margin: 2rem auto;
  padding: 1.5rem;
  background: #f3f4f6;
  border-radius: 8px;
  text-align: center;
}

form {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

input {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
}

button {
  padding: 0.5rem 1rem;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #1e40af;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  background: white;
  padding: 0.6rem;
  margin: 0.4rem 0;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

li span {
  cursor: pointer;
}

li.completed span {
  text-decoration: line-through;
  color: #888;
}

```