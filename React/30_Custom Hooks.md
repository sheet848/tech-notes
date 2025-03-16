Custom Hooks in React are a way to reuse stateful logic across multiple components. 
They enable developers to extract common logic into reusable functions, keeping the code cleaner and more maintainable. 

Custom Hooks are essentially regular JavaScript functions but must follow React's **Hook rules**.

### **Why Use Custom Hooks?**

- **Code Reusability:** Extract logic to avoid duplicating code in multiple components.
    
- **Separation of Concerns:** Keep components focused on UI while moving logic to hooks.
    
- **Clean and Readable Code:** Simplify components by delegating logic to custom hooks.

### **How to Create a Custom Hook?**

A custom hook is just a regular function that starts with the prefix `use`. This ensures React treats it as a hook and can enforce rules like “only call hooks at the top level.”

#### Example: `useFetch` - A Custom Hook for Fetching Data
```
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;

```

Using `useFetch` in a Component:

```
import React from "react";
import useFetch from "./useFetch";

const App = () => {
  const { data, loading, error } = useFetch("https://api.example.com/items");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default App;

```

### **Features of Custom Hooks**

1. **Reusable Logic:** You can use a custom hook like `useFetch` in multiple components.
    
2. **Access to Built-in Hooks:** A custom hook can use other React Hooks like `useState`, `useEffect`, `useContext`, etc.
    
3. **Encapsulation:** Custom Hooks help keep the logic self-contained and easy to debug.

### **Guidelines for Writing Custom Hooks**

1. **Always Start with** `use`**:** Custom hooks must follow React's naming conventions (e.g., `useSomething`).
    
2. **Call Hooks at the Top Level:** Don’t nest hooks inside conditions or loops.
    
3. **Follow React Hook Rules:** Use the React Hook Rules to avoid errors.

### **Other Use Cases for Custom Hooks**

- **Form Handling:** `useForm` for managing form state and validations.
    
- **Authentication:** `useAuth` for checking if a user is authenticated.
    
- **Responsive Design:** `useWindowSize` to track window dimensions.
    
- **Debouncing:** `useDebounce` for delaying input-based actions like searches.
    

#### Example: `useWindowSize`

```
import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;

```

Using `useWindowSize` in a Component:

```
import React from "react";
import useWindowSize from "./useWindowSize";

const App = () => {
  const { width, height } = useWindowSize();

  return (
    <div>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
};

export default App;

```

Custom Hooks are a powerful way to simplify your React components and make your logic reusable. They ensure your app is both clean and scalable.
