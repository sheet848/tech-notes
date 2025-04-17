```jsx
import React, { useState } from 'react';
import './styles.css'

const App = ({ rows = 5, cols =  5 }) => {

    const [lights, setLights] = useState(Array(rows).fill().map(() => Array(cols).fill(false)));

    const toggleLight = (row, col) => {
        const updatedLights =  lights.map((lightRow, r) => lightRow.map((light, c) => r === row && c === col ? !light : light));
        setLights(updatedLights);
    }

    const resetLights = () => {
        setLights(Array(rows).fill().map(() => Array(cols).fill(false)));
    }
    
    return (
        <>
        <div className="grid-container">
            {
                lights.map((row, rowIndex) => (
                    <div key={rowIndex} className="grid-row">
                        {
                            row.map((isOn, colIndex) => (
                                <div key={colIndex} 
                                        className={`light ${isOn ? "on" : "off"}`}
                                        onClick={() => toggleLight(rowIndex, colIndex)}></div>
                            ))
                        }
                    </div>
                ))
            }
             <button onClick={resetLights}>Reset</button>
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

.grid-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin: 2rem auto;
}

.grid-row {
  display: flex;
}

.light {
  width: 40px;
  height: 40px;
  margin: 2px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
}

.light.off {
  background: #d1d5db;
}

.light.on {
  background: #facc15;
  box-shadow: 0 0 8px #facc15;
}

button {
  margin-top: 1rem;
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
```