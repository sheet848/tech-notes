Creating a popup in React using React Portals is a great way to render the popup outside of the main DOM hierarchy while still maintaining its functionality within the React component tree. Here's how you can do it:

### **Steps to Create a Popup Using React Portal**

1. **Understand React Portals**:
    
    - React Portals allow you to render a component's children into a different part of the DOM (e.g., outside the parent component).
        
2. **Create a Root Element for the Portal**:
    
    - Add a container for the popup in your `index.html` file (e.g., `<div id="popup-root"></div>`).
        
3. **Use** `ReactDOM.createPortal`:
    
    - Use React's `createPortal` method to render the popup into the `popup-root` container.
        
4. **Control Visibility**:
    
    - Use `useState` to toggle the visibility of the popup.
        

### **Example: Popup Using React Portal**

#### **Popup Component**

```
import React from "react";
import ReactDOM from "react-dom";

const Popup = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Don't render if the popup is closed

  return ReactDOM.createPortal(
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <button onClick={onClose} style={styles.closeButton}>Close</button>
        {children}
      </div>
    </div>,
    document.getElementById("popup-root") // Render in the popup-root
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  popup: {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "red",
    color: "white",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
  },
};

export default Popup;

```

#### Main Component
```
import React, { useState } from "react";
import Popup from "./Popup";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => setIsPopupOpen(!isPopupOpen);

  return (
    <div>
      <button onClick={togglePopup}>Open Popup</button>
      <Popup isOpen={isPopupOpen} onClose={togglePopup}>
        <h2>Popup Content</h2>
        <p>This is some content inside the popup!</p>
      </Popup>
    </div>
  );
}

export default App;

```

#### **In** `index.html`

Ensure your HTML file includes a container for the portal:

```
<div id="root"></div>
<div id="popup-root"></div>
```

---

### **How It Works**:

1. **Portal Rendering**:
    
    - The `Popup` component uses `ReactDOM.createPortal` to render its content into the `popup-root` element instead of the default `root` element.
        
2. **Controlled Visibility**:
    
    - The `isOpen` prop controls whether the popup is shown, and the `onClose` handler allows the popup to be closed by the user.
        
3. **Styling and Overlay**:
    
    - The popup includes an overlay to dim the background and focuses the user's attention on the popup.

---
### **Enhancements**:

- **Keyboard Accessibility**: Close the popup when the `Esc` key is pressed using `useEffect`.
    
- **Animation**: Add CSS transitions or libraries like `react-spring` for smooth opening/closing effects.
    
- **Reusable**: Enhance the popup component to accept dynamic content or customizable styles.