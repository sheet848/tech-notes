# Sample Code

```
import React, { useState } from "react";

function Search() {
  // List of items to search through
  const items = ["React", "Angular", "Vue", "Svelte", "Next.js", "Nuxt.js"];
  
  // State to store the search query and filtered results
  const [searchQuery, setSearchQuery] = useState("");

  // Filtered items based on the search query
  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Search Functionality</h1>
      
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search here..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery on user input
      />
      
      {/* Display Filtered Results */}
      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <p>No results found</p>
        )}
      </ul>
    </div>
  );
}

export default Search;

```

### **3. Explanation**

1. **State Management**:
    
    - `searchQuery` holds the user input.
        
    - The `onChange` event in the input field updates the `searchQuery`.
        
2. **Filtering Logic**:
    
    - The `filter` method is used to create a new array of items that match the search query.
        
    - The `toLowerCase()` function makes the search case-insensitive.
        
3. **Dynamic Rendering**:
    
    - The filtered list is mapped to display matching results.
        
    - If no matches are found, a message ("No results found") is displayed.

---

### **4. Enhancements**

- **Debouncing**: Avoid filtering on every keystroke for better performance in large datasets. You can use libraries like `lodash` or implement a custom debounce function.
    
- **Highlight Search Term**: Use a library like `react-highlight-words` or implement your own logic to highlight the matched text in results.
    
- **Fetching Data**: If your data comes from an API, you can integrate this logic with API calls and dynamically fetch results based on the search query.