# How to avoid Fetch API and pass data directly?

If you'd like to avoid using the Fetch API to retrieve data in your React application, you can pass data directly through props or load it from a local file or state. 

This is useful for mock data during development or for static, hardcoded information. Here are a few alternatives:

### **1. Passing Data via Props**

You can pass data directly from a parent component to its child components using props.

#### Example:

```
const Parent = () => {
  const data = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];

  return <Child data={data} />;
};

const Child = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default Parent;

```

Here, the `Parent` component provides the data directly to the `Child` component, avoiding the need for a fetch.

### **2. Using Local JSON Files**

You can store the data in a local JSON file and import it into your component.

#### Example:

1. Create a file, `data.json`:

```
[
  { "id": 1, "name": "Alice" },
  { "id": 2, "name": "Bob" }
]

```

2. Import and use it in your React component:

```
import React from "react";
import data from "./data.json";

const App = () => {
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

This avoids any API calls and works well for static or mock data.

### **3. Using React State**

You can define the data directly in a React state and use it within the component.

#### Example:

```
import React, { useState } from "react";

const App = () => {
  const [data] = useState([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ]);

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

This approach is dynamic and can be combined with user interactions, like adding or updating data.

### **4. Using Context for Global Data Sharing**

If you need to pass data across multiple components without using Fetch, the React Context API is a good choice.

#### Example:

```
import React, { createContext, useContext } from "react";

const DataContext = createContext();

const Parent = () => {
  const data = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];

  return (
    <DataContext.Provider value={data}>
      <Child />
    </DataContext.Provider>
  );
};

const Child = () => {
  const data = useContext(DataContext);

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default Parent;

```

This method avoids prop-drilling and allows shared data across nested components.

---
### **When to Avoid Fetch API?**

- During early development with mock data.
    
- For static data that doesn’t change (e.g., app configuration or hardcoded text).
    
- To simplify a component and avoid external dependencies.