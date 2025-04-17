```jsx
//Accordion.jsx
import React, { useState, useRef } from "react";

const AccordionItem = ({ id, title, content, isOpen, onToggle, buttonRef }) => {
  return (
    <div className="accordion-item">
      <h3>
        <button
          ref={buttonRef}
          id={`accordion-button-${id}`}
          aria-expanded={isOpen}
          aria-controls={`accordion-panel-${id}`}
          onClick={onToggle}
          className="accordion-button"
        >
          {title}
        </button>
      </h3>
      <div
        id={`accordion-panel-${id}`}
        role="region"
        aria-labelledby={`accordion-button-${id}`}
        hidden={!isOpen}
        className="accordion-panel"
      >
        {content}
      </div>
    </div>
  );
};

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const buttonRefs = useRef([]);

  const handleToggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const handleKeyDown = (e, index) => {
    const total = items.length;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = (index + 1) % total;
      buttonRefs.current[next]?.focus();
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev = (index - 1 + total) % total;
      buttonRefs.current[prev]?.focus();
    }
  };

  return (
    <div className="accordion">
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          id={i}
          title={item.title}
          content={item.content}
          isOpen={i === openIndex}
          onToggle={() => handleToggle(i)}
          buttonRef={(el) => (buttonRefs.current[i] = el)}
          onKeyDown={(e) => handleKeyDown(e, i)}
        />
      ))}
    </div>
  );
};

export default Accordion;
```

```jsx
//App.jsx
import React, { useState, useEffect } from "react";
import Accordion from "./ProgressBar";
import "./styles.css"

const items = [
  { title: "What is React?", content: "React is a JS library for UI development." },
  { title: "What is JSX?", content: "JSX is a syntax extension for JavaScript." },
  { title: "What are Hooks?", content: "Hooks let you use state and other React features without a class." },
];

const App = () => {
    
      return (
          <>
              <div className="page-container">
                  <h2>Accessible Accordion</h2>
                  <Accordion items={items} />
              </div>
          </>
      )
};

export default App;

```

```css
.accordion-item {
  border: 1px solid #ddd;
  margin-bottom: 8px;
  border-radius: 4px;
}

.accordion-button {
  width: 100%;
  text-align: left;
  padding: 1rem;
  font-size: 1rem;
  background: #f3f4f6;
  border: none;
  cursor: pointer;
}

.accordion-button:focus {
  outline: 2px solid #60a5fa;
}

.accordion-panel {
  padding: 1rem;
  background: #fff;
}
```