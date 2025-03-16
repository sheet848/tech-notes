Uncontrolled components in React offer a different way to handle form inputs compared to controlled components. Here's an overview and how they contrast:

### **What are Uncontrolled Components?**

- In uncontrolled components, form data is managed by the DOM itself rather than React state.
    
- You access the current value of an input using a `ref` instead of binding the input to the component state.

### **Key Characteristics**

1. The input element's value is not directly controlled by React.
    
2. You rely on the DOM to get the current value of the input when needed (e.g., upon form submission).
    
3. These components are simpler to use for scenarios where real-time validation or updates are not required.

### **Controlled vs Uncontrolled Components**

|Feature|Controlled Components|Uncontrolled Components|
|---|---|---|
|**Data Management**|Form state managed by React via `useState`|Form state managed by the DOM|
|**Accessing Data**|Use `value` and `onChange` handlers|Use `ref` to read the value directly|
|**Complex Logic**|Better for dynamic validation, live updates|Better for simpler forms with fewer constraints|
|**Example Use Case**|Dynamic forms, search bars, real-time checks|Simple forms, large pre-existing DOM-based apps|
|**Code Complexity**|Slightly more setup|Minimal setup|
### **Uncontrolled Components Example**

Let’s look at a simple example where we use a `ref` to fetch an input's value upon form submission:

```
import React, { useRef } from "react";

function UncontrolledInput() {
  // Step 1: Create a ref for the input
  const inputRef = useRef(null);

  // Step 2: Access the input value when needed
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh
    alert(`Submitted value: ${inputRef.current.value}`); // Access value from the ref
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter Text:
        <input type="text" ref={inputRef} /> {/* Uncontrolled input */}
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledInput;

```

### **Advantages of Uncontrolled Components**

1. **Simplicity**: Easier to set up for basic forms where you don’t need live updates.
    
2. **Integration**: Helpful when integrating React with non-React libraries or existing DOM-heavy applications.
    
3. **Reduced State Management**: No need for `useState` or handlers to keep input in sync.

### **When to Use Uncontrolled Components**

- If you’re working on a simple form that doesn't require validation or real-time updates.
    
- When you want minimal React involvement for form handling.
    
- If you’re migrating or working with legacy code where form elements are already DOM-managed.


To summarize, controlled components offer more power and flexibility for handling complex and dynamic forms. On the other hand, uncontrolled components are better for simpler use cases where direct DOM manipulation suffices.