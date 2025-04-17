```jsx
import React, { useState, useEffect } from 'react';
import './styles.css'

const App = () => {

    const [activeLight, setActiveLight] = useState("red");

    useEffect(() => {
        const interval =  setInterval(() => {
            setActiveLight((prev) => {
                if (prev === "red") return "green";
                if (prev === "green") return "yellow";
                return "red";
            })
        }, 2000);

        return () => clearInterval(interval);
    }, []);
    
    return (
        <>
        <div className="traffic-light-container">
            <div className={`light red ${activeLight === "red" ? "on" : ""}`} />
            <div className={`light yellow ${activeLight === "yellow" ? "on" : ""}`} />
            <div className={`light green ${activeLight === "green" ? "on" : ""}`} />
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

.traffic-light-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #333;
  padding: 1rem;
  width: 100px;
  border-radius: 12px;
  gap: 0.8rem;
  margin: 2rem auto;
}

.light {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #555;
  transition: background 0.3s;
}

.red.on {
  background: #ef4444;
}

.yellow.on {
  background: #facc15;
}

.green.on {
  background: #22c55e;
}

```