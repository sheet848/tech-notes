```jsx
//App.jsx

import React, { useState, useEffect } from "react";
import AutoComplete from "./ProgressBar";
import "./styles.css"

const fruits = [
  "Apple", "Apricot", "Avocado",
  "Banana", "Blackberry", "Blueberry",
  "Cherry", "Coconut", "Date",
  "Fig", "Grape", "Guava",
  "Lemon", "Lime", "Mango",
  "Melon", "Orange", "Papaya",
  "Peach", "Pear", "Pineapple",
  "Plum", "Pomegranate", "Raspberry",
  "Strawberry", "Watermelon"
];

const App = () => {
    
      return (
          <>
              <div className="page-container">
                  <h2>React Autocomplete</h2>
                  <AutoComplete suggestions={fruits}/>
              </div>
          </>
      )
};

export default App;
```

```jsx
 //AutoComplete.jsx

import React, { useState, useEffect, useRef } from "react";

const AutoComplete = ({ suggestions = [] }) => {

    const [input, setInput] =  useState("");
    const [filtered, setFiltered] = useState([]);
    const [activeIndex, setActiveIndex] = useState(-1);
    const [showList, setShowList] = useState(false);
    const listRef =  useRef(null);

    useEffect(() => {
        if(input.trim()) {
            const matches = suggestions.filter((s) => s.toLowerCase().includes(input.toLowerCase()));

            setFiltered(matches);
            setShowList(true);
            setActiveIndex(-1);
        } else {
            setFiltered([]);
            setShowList(false);
        }
        
    }, [input, suggestions]);

    const handleClick = (value) => {
        setInput(value);
        setShowList(false);
    }

    const handleBlur = () => {
        setTimeout(() => setShowList(false), 100);
    }
    
    return (
        <>
           <div className="autocomplete">
                <input 
                        type="text"
                        role="combobox"
                        placeholder="Start Typing..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onBlur={handleBlur}
                />
                {
                    showList && filtered.length > 0 && (
                    <ul className="autocomplete-list" role="listbox"
                            ref={listRef}>
                            {
                                filtered.map((item, index) => (
                                    <li key={index} role="option"
                                        className={index === activeIndex ? "active" : ""}
                                        onMouseDown={() => handleClick(item)}>{item}</li>
                                ))
                            }
                </ul>
                    )
                }
            </div>
        </>
    )
}

export default AutoComplete
```

```css
.autocomplete {
  position: relative;
  width: 300px;
}

.autocomplete input {
  width: 100%;
  padding: 0.6rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.autocomplete-list {
  position: absolute;
  width: 100%;
  background: white;
  border: 1px solid #ccc;
  border-top: none;
  max-height: 200px;
  overflow-y: auto;
  z-index: 100;
  margin-top: -1px;
}

.autocomplete-list li {
  padding: 0.6rem;
  cursor: pointer;
}

.autocomplete-list li.active,
.autocomplete-list li:hover {
  background-color: #f3f4f6;
}
```