### **1. In Functional Components (using** `useState`**):**

In functional components, each state is managed independently using the `useState` hook. You can call multiple state updater functions (e.g., `setState1`, `setState2`) in a single event handler to update multiple states at the same time.

```
import React, { useState } from "react";

function MultipleStates() {
  const [count, setCount] = useState(0);     // First state
  const [name, setName] = useState("React"); // Second state

  const handleUpdates = () => {
    setCount(count + 1);  // Update count
    setName("Updated");   // Update name
  };

  return (
    <div>
      <p>Count: {count}</p>
      <p>Name: {name}</p>
      <button onClick={handleUpdates}>Update Both States</button>
    </div>
  );
}

export default MultipleStates;

```

Here, the `handleUpdates` function sets both `count` and `name` states at once by calling their respective setters.

### **2. In Class Components (using** `this.setState`**):**

In class components, `this.setState` allows you to update multiple state properties simultaneously by passing an object with the updated values.

```
import React, { Component } from "react";

class MultipleStates extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,  // First state
      name: "React",  // Second state
    };
  }

  handleUpdates = () => {
    this.setState({
      count: this.state.count + 1, // Update count
      name: "Updated",            // Update name
    });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <p>Name: {this.state.name}</p>
        <button onClick={this.handleUpdates}>Update Both States</button>
      </div>
    );
  }
}

export default MultipleStates;

```

Here, you pass an object with multiple key-value pairs to `this.setState`.

---
### **Key Points to Consider:**

1. **State Updates in Functional Components:**
    
    - If two state updates depend on each other, React batches the updates in functional components, so be mindful of the order.
        
2. **State Updates in Class Components:**
    
    - State updates in class components are merged. For example, if the state has multiple properties, React will only update the ones you specify in `this.setState` without replacing the entire state object.
    
3. **Using a Single State Object:**

	- Alternatively, you can use one state object to manage multiple pieces of state, like this:

```
const [state, setState] = useState({ count: 0, name: "React" });

const handleUpdates = () => {
  setState({ ...state, count: state.count + 1, name: "Updated" });
};

```

Here, `...state` ensures that you preserve the current state values while updating specific properties.

