```jsx
//Timer
import React, { useState, useEffect, useRef } from "react"
import "./styles.css"

const App = () => {

    const [seconds, setSeconds] =  useState(0);
    const [isActive, setIsActive] = useState(false);
    const intervalRef = useRef(null);
    
    // start or pause the timer
    const toggleTimer = () => {
        setIsActive(!isActive);
    }

    //handle interval
    useEffect(() => {
        if(isActive) {
            intervalRef.current = setInterval(() => {
                setSeconds((prev) => prev + 1);
            }, 1000);
        } else {
            clearInterval(intervalRef.current);
        }

        return () => clearInterval(intervalRef.current);
    }, [isActive]);

    //resetTimer
    const resetTimer = () => {
        setIsActive(false);
        setSeconds(0);
        clearInterval(intervalRef.current);
    }
    
    return (
        <>
        <div className="timer">
            <h2>React Timer</h2>
            <div className="time">{seconds} s</div>
            <div className="controls">
                <button onClick={toggleTimer}>
                    {
                        isActive ? "Pause" : "Start"
                    }
                </button>
                <button onClick={resetTimer}>Reset</button>
            </div>
        </div>
        </>
    )
}

export default App
```

```css
.timer {
  text-align: center;
  padding: 2rem;
}

.time {
  font-size: 3rem;
  margin: 1rem 0;
}

.controls button {
  margin: 0 0.5rem;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.controls button:hover {
  background: #1d4ed8;
}
```