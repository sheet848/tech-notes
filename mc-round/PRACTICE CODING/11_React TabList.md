```jsx
//App.jsx
import React from "react"
import Tabs from './Tabs'

const tabData = [
  {
    label: "Home",
    content: <p>Welcome to the Home tab!</p>,
  },
  {
    label: "Profile",
    content: <p>This is your Profile tab.</p>,
  },
  {
    label: "Settings",
    content: <p>Adjust your Settings here.</p>,
  },
];

const App = () => {
    return (
        <>
            <div>
                <h2>Acessible React Tabs</h2>
                <Tabs tabs={tabData} />
            </div>
        </>
    )
}

export default App
```

```jsx
//Tabs.jsx
import React, { useState, useRef } from "react"
import './styles.css'

const Tabs = ({ tabs }) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const tabRefs =  useRef([]);
    
    return (
        <>
            <div className="tablist">
        {
            tabs.map((tab, index) => (
                <button className={`tab ${activeIndex === index ? "active" : ""}`}
                    key={index}
                    ref={(el) => (tabRefs.current[index] = el)}
                    onClick={() => setActiveIndex(index)}>
                        {tab.label}
                </button>
            ))
        }
            </div>
        {
            tabs.map((tab, index) => (
                <div key={index} className="tabpanel"
                        hidden={activeIndex !== index}>
                {tab.content}
                </div>
            ))
        }
        </>
    )
}

export default Tabs
```

```css
.tablist {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.tab {
    padding: 0.6rem 1rem;
    font-size: 1rem;
    border: none;
    background: #e5e7eb;
    cursor: pointer;
    border-radius: 4px;
}

.tabpanel {
    padding: 1rem;
    border: 1px solid #d1d5db;
    border-radius: 4px;
}

.tab.active {
    background: #2563eb;
    color: #fff;
}
```

