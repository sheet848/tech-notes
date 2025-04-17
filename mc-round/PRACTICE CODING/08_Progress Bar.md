```jsx
//App.jsx
import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import "./styles.css"

const App = () => {

    const [progress, setProgress] =  useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if(prev >= 100) return 100;
                return prev + 10;
            });
        }, 1000);
    }, []);
    
      return (
          <>
              <div className="page-container">
                  <h2>File Upload Progress</h2>
                   <ProgressBar value={progress} label="File Upload Progress"/>
              </div>
          </>
      )
};

export default App;
```

```jsx
//ProgressBar
import React from "react";
import "./styles.css";

const ProgressBar = ({ value, label="Loading progress", max = 100}) => {

    const percent = Math.min(100, (value/max)*100).toFixed(1);
    
  return (
      <>
          <div className="progress-wrapper">
              <div className="progress-bar"
                      role="progress-bar"
                      aria-valuenow={value}
                      aria-valuemin={0}
                      aria-valuemax={max}
                      aria-label={label}
                        >
                  <div className="progress-fill"
                          style={{ width: `${percent}%`}}></div>
              </div>
              <span className="progress-text">{percent}%</span>
          </div>
      </>
  )
};

export default ProgressBar;
```

```css
.progress-wrapper {
    width: 100%;
    max-width: 400px;
    margin: 1rem 0;
}

.progress-bar {
    height: 20px;
    background: #e5e7eb;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
}

.progress-fill {
    height: 100%;
    background: green;
    transition: width 0.3s ease;
}

.progress-wrapper .progress-text {
    margin-top: 1rem;
    font-size: 2rem;
    color: #333;
}
```

1. create basic page and progress bar UI with CSS
2. create useState for progress
3. create useEffect and setInterval for progress
4. pass progress state to progressbar ui
5. in progress bar UI, pass the progress value and max value
6. calculate percentage
7. add percentage value dynamically to text and the progress fill width
8. add the necessary accessibility