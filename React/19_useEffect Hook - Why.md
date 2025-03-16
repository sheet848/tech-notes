The `useEffect()` **hook** in React is essential for handling **side effects** in functional components. 
Side effects are tasks that happen outside the React rendering process, such as fetching data, manipulating the DOM, or setting up subscriptions. 

Here's why we need it:

### **1. Perform Side Effects in Functional Components**

Before React Hooks, side effects were handled in class components using lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`. With `useEffect`, you can achieve the same functionality in functional components, making your code cleaner and more concise.

### **2. Synchronize with React's Rendering**

React functional components re-render whenever state or props change. The `useEffect` hook lets you run specific logic after the render is complete or when certain values change, ensuring that your component stays synchronized with external data or behaviors.

### **3. Manage Lifecycle Events**

The `useEffect` hook can emulate different lifecycle events depending on how it's used:

- **Component Mount**: Run code once when the component mounts.
    
- **Component Update**: Run code whenever dependencies change.
    
- **Component Unmount**: Clean up resources when the component unmounts.

```
import React, { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  // Effect runs after every render and updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty array ensures this effect runs only once on mount

  return <h1>Timer: {count}</h1>;
}

```

### **4. Fetch Data from APIs**

Fetching data from an API is a common side effect in React applications. The `useEffect` hook is used to trigger data fetching when the component loads or when a certain dependency changes.

Example:

```
useEffect(() => {
  fetch("https://api.example.com/data")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}, []); // Runs only once when the component mounts

```

### **5. Manage Subscriptions and Cleanup**

You can use `useEffect` to handle subscriptions (e.g., WebSocket connections or event listeners) and clean them up when the component unmounts, ensuring proper resource management.

### **6. Dependency Array for Control**

The optional **dependency array** in `useEffect` allows you to specify which variables the effect depends on. This makes it efficient by avoiding unnecessary re-runs of the effect.

- **No Dependencies**: Runs on every render.

```
useEffect(() => console.log("Effect ran!"));
```

- **Empty Array (**`[]`**)**: Runs only on the first render (like `componentDidMount`).

```
useEffect(() => console.log("Effect ran once!"), []);
```

- **Specific Dependencies**: Runs only when specified variables change.

```
useEffect(() => console.log("Count changed!"), [count]);
```

### **7. Keep Code Clean and Modular**

`useEffect` encourages separating concerns by placing effect-related logic inside the hook, making it easier to read and maintain functional components.


### **When to Use** `useEffect`

- Fetching or synchronizing data with an external source.
    
- Setting up or cleaning up subscriptions or intervals.
    
- Running DOM manipulations like animations.
    
- Managing changes in state or props.
