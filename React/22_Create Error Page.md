Creating an error page in React is quite simple and adds a nice touch to your app's user experience by handling unexpected scenarios gracefully. Here's how you can do it:

### **1. Create the Error Component**

Start by creating a dedicated component for the error page, for example, `ErrorPage.js`:

```
import React from "react";

const ErrorPage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <a href="/" style={{ textDecoration: "none", color: "blue" }}>
        Go Back Home
      </a>
    </div>
  );
};

export default ErrorPage;

```

### **2. Define a "Catch-All" Route**

Add a route that handles undefined paths in your routing configuration. Place this as the last `<Route>` in your `Routes` definition, as React Router uses a "first match" strategy. Here's an example:

```
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* Catch-All Route */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;

```

The `path="*"` ensures that this route matches any path that doesn't correspond to an existing route.

