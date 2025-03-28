import { useState } from 'react'
import './App.css'

function App() {

  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4']);
  const [dragabbleIndex, setDragabbleIndex] = useState(null);

  const handleDragStart = (index) => {
    setDragabbleIndex(index);
  }

  const handleDragOver = (e) => {
    e.preventDefault();
  }

  const handleDrop = (index) => {
    const newItems = [...items];
    const draggedItem = newItems[dragabbleIndex];

    newItems.splice(dragabbleIndex, 1);
    newItems.splice(index, 0, draggedItem);

    setItems(newItems);
    setDragabbleIndex(null);
  }

  return (
    <>
      <div className="App">
        <h1>React Drag and Drop</h1>
        <ul>
          {
            items.map((item, index) => (
              <li key={index}
                  draggable
                  onDragStart={() => handleDragStart(index)}
                  onDragOver={handleDragOver}
                  onDrop={() => handleDrop(index)}>
                {item}
              </li>
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default App
