# React Search Bar

Here's a simple implementation of a **search bar** in React using functional components and hooks. This example demonstrates how to filter and display a list of items based on user input:

---

### **React Search Bar Code**:

```javascript
import React, { useState } from "react";

const SearchBar = () => {
    // Sample data to search from
    const data = ["Apple", "Banana", "Cherry", "Date", "Fig", "Grape", "Mango"];
    const [searchTerm, setSearchTerm] = useState(""); // State for the input value
    const [filteredData, setFilteredData] = useState(data); // State for the filtered data

    // Function to handle search input change
    const handleSearch = (event) => {
        const value = event.target.value.toLowerCase();
        setSearchTerm(value);

        // Filter the data based on the search term
        const filtered = data.filter((item) =>
            item.toLowerCase().includes(value)
        );
        setFilteredData(filtered);
    };

    return (
        <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
            {/* Search input */}
            <input
                type="text"
                placeholder="Search items..."
                value={searchTerm}
                onChange={handleSearch}
                style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "10px",
                    fontSize: "16px",
                }}
            />

            {/* Display filtered data */}
            <ul style={{ listStyleType: "none", padding: 0 }}>
                {filteredData.map((item, index) => (
                    <li key={index} style={{ padding: "5px 0" }}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchBar;
```

---

### **How It Works**:

1. **State Management**:
    - `searchTerm` keeps track of the user's input.
    - `filteredData` contains the data that matches the search criteria.
2. **Event Handling**:
    - The `handleSearch` function updates `searchTerm` and filters the data dynamically as the user types.
3. **Display**:
    - The filtered data is displayed in a simple list format.

---

### **Usage**:

1. Save the code in a file (e.g., `SearchBar.js`).
2. Import and use the `SearchBar` component in your main app file (e.g., `App.js`):

```javascript
import React from "react";
import SearchBar from "./SearchBar";

const App = () => {
    return (
        <div>
            <h1>React Search Bar</h1>
            <SearchBar />
        </div>
    );
};

export default App;
```

---

### **Enhancements**:

- Add a debounce mechanism to improve performance for large datasets.
- Integrate the search with an API if needed (e.g., fetching data based on input).
- Style the search bar and results using CSS or libraries like Bootstrap.

Let me know if you'd like further guidance!