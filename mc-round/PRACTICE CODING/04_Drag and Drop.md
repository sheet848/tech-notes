```jsx
//App.ksx
import React, { useState } from "react"
import './comp/switch.css'

const App = () => {

    const [items, setItems] = useState([
        "Pizza",
        "Burger",
        "Taco",
        "Ramen",
        "Donut",
    ]);

    const [dragIndex, setDragIndex] = useState(null);

    // dragging operation

    const handleDragStart = (index) => {
        setDragIndex(index);
    }

    const handleDragOver = (e) => {
        e.preventDefault();
    }

    const handleDrop = (index) => {
        if(dragIndex === null || dragIndex === index) return;

        const updated = [...items];
        const [movedItem] = updated.splice(dragIndex, 1);
        updated.splice(index, 0, movedItem);
        setItems(updated);
        setDragIndex(null);
    }

    return (
        <>
            <div className="container">
                <h3>Sortable Drag and Drop</h3>
                 {
                    items.map((item, index) => (
                        <div
                            key={index}
                            className="boxlink"
                            draggable
                            onDragStart={()=> handleDragStart(index)}
                            onDragOver={handleDragOver}
                            onDrop={()=> handleDrop(index)}>{item}</div>
                    ))
                }
            </div>
        </>
    )
}

export default App;
```

```css
.container {
    width: 300px;
    margin: 2rem;
}

.boxlink {
    padding: 12px;
    margin-bottom: 8px;
    background: #f7f7f7;
    border: 1px solid #ccc;
    cursor: grab;
}
```

1. create page UI
2. create items useState and create the UI list
3. create drag Index useState
4. perform dragging operation
	1. handleDragStart
	2. handleDragOver
	3. handleDrop