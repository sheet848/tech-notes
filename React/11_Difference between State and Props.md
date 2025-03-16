In React, **State** and **Props** are key concepts, but they serve different purposes:

### **State**

- **What it is**: State is a built-in object that holds data or information about the component. It allows a component to manage its own data.
    
- **Mutability**: State is mutable, meaning it can be updated using the `setState` function (or the state updater function in functional components with hooks like `useState`).
    
- **Ownership**: State is local to the component it resides in—it can't be accessed or modified directly by child components.
    
- **Use**: It is mainly used to handle dynamic data that can change over time, like user input, form values, or toggles.

```
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

---
### **Props**

- **What it is**: Props (short for properties) are inputs passed to a component from its parent. They are used to pass data and event handlers down the component hierarchy.
    
- **Mutability**: Props are immutable; they cannot be modified by the receiving component.
    
- **Ownership**: Props are external and controlled by the parent component. A child component receives props and uses them without altering them.
    
- **Use**: Props are used to make components reusable by providing different data for rendering.

```
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

function App() {
  return <Greeting name="Sheetal" />;
}

```

---

### **Key Differences**

|Aspect|State|Props|
|---|---|---|
|**Data Control**|Managed within the component|Passed from parent to child|
|**Mutability**|Mutable (using setState or hooks)|Immutable|
|**Purpose**|Handles dynamic data|Enables data communication|
|**Scope**|Local to the component|Global (shared between components)|

Think of **State** as the component's private memory, while **Props** are like parameters passed to a function.
