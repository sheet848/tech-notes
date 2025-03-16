Filtering data using custom hooks is a powerful way to create reusable and clean code in React. By encapsulating the filtering logic in a custom hook, you can keep your components focused on rendering the UI and make the filtering process modular.

### **Steps to Create a Custom Hook for Filtering Data**:

1. **Define the Custom Hook**:
    
    - Create a function that takes in data and filtering criteria as arguments and returns the filtered data.
        
2. **Use React's State and Effects**:
    
    - Leverage React's `useState` to manage the filtered data and optionally `useEffect` to respond to changes in the data or criteria.
        
3. **Return the Filtered Data**:
    
    - Return the filtered data and any other utilities (e.g., setter functions) needed by the component.

### **Example: Filtering a List of Items**

#### Step 1: Create the Custom Hook
```
import { useState, useEffect } from 'react';

function useFilteredData(data, filterCriteria) {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (filterCriteria) {
      const result = data.filter(item =>
        item.toLowerCase().includes(filterCriteria.toLowerCase())
      );
      setFilteredData(result);
    } else {
      setFilteredData(data); // Show all data if no criteria
    }
  }, [data, filterCriteria]); // Rerun when data or criteria change

  return filteredData;
}

export default useFilteredData;

```

#### Step 2: Use the Custom Hook in a Component
```
import React, { useState } from 'react';
import useFilteredData from './useFilteredData';

function App() {
  const [filter, setFilter] = useState('');
  const data = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango'];

  // Use the custom hook
  const filteredData = useFilteredData(data, filter);

  return (
    <div>
      <input
        type="text"
        placeholder="Filter items"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

```


### **How It Works**:

1. **Custom Hook**:
    
    - `useFilteredData` accepts the `data` array and `filterCriteria` (a string).
        
    - It filters the data using the `Array.filter()` method, based on whether items include the filter criteria.
        
2. **Component Usage**:
    
    - The `App` component uses the hook to filter the list of fruit names dynamically as the user types in the input field.
        
3. **Reusable Logic**:
    
    - The hook can be reused in other components to filter different types of data.
