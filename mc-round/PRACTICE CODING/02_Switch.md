```jsx
// app.jsx
import React, {useState} from "react"
import Switch from "./comp/Switch"

const App = () => {

    const [isOn, setIsOn] = useState(false);
    
    return (
        <>
            <div>
                <h2>Toggle Setting:</h2>
                <Switch checked={isOn} onChange={setIsOn} />
                <p>Status: {isOn ? "ON" : "OFF"}</p>
            </div>
        </>
    )
}

export default App;
```

```jsx
//switch.jsx
import React from "react"
import "./switch.css"

const Switch = ({ checked, onChange }) => {
    return (
        <>
            <div className={`switch ${checked ? "switch-on" : ""}`}
                onClick={() => onChange(!checked)}
                role="switch"
                aria-checked={checked}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onChange(!checked);
        }
      }}
                >
                <div className="switch-thumb"/>
            </div>
        </>
    )
}

export default Switch;
```

```css
// switch.css
.switch {
    width: 80px;
    height: 30px;
    background: #ccc;
    cursor: pointer;
    border-radius: 999px;
    position: relative;
    transition: background-color 0.3s;
    outline: none;
}

.switch-thumb {
    width: 22px;
    height: 22px;
    background: #fff;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 2px;
    transition: transform 0.3s;
}

.switch-on {
  background-color: #4ade80; /* green */
}

.switch-on .switch-thumb {
  transform: translateX(50px);
}
```

1. Basic page UI in app.jsx
2. Basic toggle switch UI in switch.jsx and switch.css
3. add switch state in App and pass it is Switch comp
4. create state change in the switch.jsx -> switch will in work
5. add aria-checked, tabIndex, keydown -> for accessibility