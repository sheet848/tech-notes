# When should we use Context?

The **Context API** in React is a powerful tool for sharing data across components without needing to pass props manually at every level. However, it’s most effective in specific scenarios. Here are some situations where using Context is ideal:

### **1. When You Need Global State**

If multiple components in your app need access to the same data (e.g., user authentication state, theme preferences, or language settings), Context provides an efficient way to share that data.

#### Example Use Cases:

- **User Authentication:** Storing the current user's details, like `userId` or `isLoggedIn`.
    
- **Theme Management:** Managing light and dark modes across your app.
    
- **Localization:** Providing translations or language settings globally.

---

### **2. Avoiding Prop Drilling**

When you need to pass data through many nested components, prop-drilling (manually passing props through multiple levels) can become unwieldy. Context allows you to avoid this by making the data accessible wherever it’s needed, without passing it down through each component.

#### Example:

Instead of passing a `theme` prop down through multiple components:

```
<Parent theme="dark">
  <Child theme="dark">
    <Grandchild theme="dark" />
  </Child>
</Parent>

```

You can use Context to provide the `theme` directly to the `Grandchild`.

---

### **3. When Data is Relatively Stable**

Context works best for data that doesn’t change frequently. For frequently updated data (e.g., animations or rapidly changing state), Context might not perform as well due to potential performance issues with re-renders.

#### Stable Data Examples:

- **Theme Settings**
    
- **App Configuration**
    
- **User Permissions**

---
### **4. When Components Need a Common Source of Truth**

If multiple unrelated components need to access and update the same piece of data, Context is an ideal solution. It acts as a single source of truth for those components.

---

### **5. For Managing Application-Wide Side Effects**

Context can simplify managing state tied to global side effects, such as:

- Opening or closing modals.
    
- Showing toast notifications.

---
### **When Not to Use Context**

While Context is helpful, it’s not always the best solution:

- **For Local State:** If the data is only relevant to a single component or a small part of the app, use the `useState` or `useReducer` hooks instead.
    
- **For Complex State Management:** For larger apps with complex state logic, libraries like **Redux** or **Zustand** may be better.
    
- **Performance-Sensitive Components:** Context can cause unnecessary re-renders. To optimize, you might use libraries like `useContextSelector` or split the context into smaller pieces.

---
---

# Implement Context in React

Here's how you can create and use a Context in React to share data globally without prop-drilling:

### **1. Create the Context**

First, create a file (e.g., `ThemeContext.js`) and define your context using `createContext`:

```
import React, { createContext, useState } from "react";

// Create a context
export const ThemeContext = createContext();

// Create a provider component
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

```

- `ThemeContext.Provider`: This wraps your app or specific parts of it, providing the context data (`darkMode` and `toggleDarkMode`) to all child components.
    
- **State Management**: The `useState` hook is used here to manage the theme.

### **2. Wrap Your App with the Provider**

Wrap your application in the `ThemeProvider` so the context data becomes available throughout the app:

```
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "./ThemeContext";

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

```

### **3. Consume the Context**

Use the `useContext` hook in any component to access the context's data and functions.

#### Example:

```
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <header style={{ background: darkMode ? "#333" : "#fff", color: darkMode ? "#fff" : "#000" }}>
      <h1>{darkMode ? "Dark Mode" : "Light Mode"} is On</h1>
      <button onClick={toggleDarkMode}>
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </button>
    </header>
  );
};

export default Header;

```

### **4. Final Structure**

Your directory might look like this:

```
src/
├── ThemeContext.js   // Context definition
├── App.js            // Main app
├── Header.js         // Component using the context
```

### **Result**

- Clicking the button in the `Header` component toggles between **Dark Mode** and **Light Mode**.
    
- All components wrapped in the `ThemeProvider` can now access and use the `darkMode` state and `toggleDarkMode` function without needing to pass them through props.