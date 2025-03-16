Implementing Dark Mode in React is a fun and practical feature to enhance user experience. Here's a step-by-step guide to set it up:

### **1. Use React State to Toggle Dark Mode**

You can manage dark mode by toggling a class on the body or specific components.

#### Example:

```
import React, { useState } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <button onClick={toggleDarkMode}>
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </button>
      <h1>Welcome to Dark Mode App</h1>
      <p>This is a {darkMode ? "dark" : "light"} theme!</p>
    </div>
  );
};

export default App;

```

Add CSS for Dark and Light Modes:

```
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.light-mode {
  background-color: white;
  color: black;
}

.dark-mode {
  background-color: #121212;
  color: white;
}

button {
  margin: 20px;
  padding: 10px 20px;
  cursor: pointer;
}

```

---
### **2. Use Context API for Global Dark Mode**

If you want dark mode to work across multiple components, the Context API is a great solution.

#### Example:

1. Create a `ThemeContext`:

```
import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

```

2. Wrap Your App in the Provider:

```
import React from "react";
import { ThemeProvider } from "./ThemeContext";
import App from "./App";

const Root = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default Root;

```

3. Use the Context in Components:

```
import React from "react";
import { useTheme } from "./ThemeContext";

const App = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <button onClick={toggleDarkMode}>
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </button>
      <h1>{darkMode ? "Dark Mode" : "Light Mode"} is Active</h1>
    </div>
  );
};

export default App;

```

---
### **3. Persist Dark Mode with Local Storage**

To remember the user's dark mode preference, you can store it in `localStorage`.

#### Example:

1. Update the Toggle Function:

```
const toggleDarkMode = () => {
  const newMode = !darkMode;
  setDarkMode(newMode);
  localStorage.setItem("darkMode", JSON.stringify(newMode));
};

useEffect(() => {
  const savedMode = JSON.parse(localStorage.getItem("darkMode"));
  if (savedMode !== null) {
    setDarkMode(savedMode);
  }
}, []);

```

### **4. Use Tailwind CSS (Optional)**

If you’re using Tailwind CSS, you can implement dark mode quickly with its built-in support:

- Add `darkMode: "class"` to your Tailwind config file.
    
- Toggle the `dark` class on the root HTML element (`<html>` or `<body>`).