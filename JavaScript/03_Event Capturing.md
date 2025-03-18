Event capturing is another phase of event propagation in the DOM, but instead of starting at the target element and bubbling up, it begins at the root (or topmost ancestor) and works its way down to the target element. It’s the opposite of event bubbling.

### **How Event Capturing Works:**
1. The event starts from the outermost ancestor (e.g., `document` or `html`).
2. It travels down the DOM tree through all parent elements until it reaches the target element.

By default, event listeners are registered in the **bubbling phase**, but you can explicitly register them to listen in the capturing phase.

### **Code Example:**
Here's a simple demonstration:
```javascript
document.getElementById("parent").addEventListener("click", function() {
    console.log("Parent div clicked");
}, true); // The third parameter 'true' enables capturing phase

document.getElementById("child").addEventListener("click", function() {
    console.log("Child button clicked");
});
```

### **Output When You Click on the Button:**
1. First, the message "Parent div clicked" is logged (capturing phase).
2. Then, "Child button clicked" is logged (target and bubbling phase).

### **Key Differences Between Capturing and Bubbling:**
| **Aspect**             | **Event Capturing**                     | **Event Bubbling**                    |
|-------------------------|-----------------------------------------|---------------------------------------|
| **Direction**          | From root to target (top-down).         | From target to root (bottom-up).      |
| **Default Phase**      | Requires explicit opt-in (`true`).      | Used by default in event listeners.   |
| **Use Case**           | Rarely used, but useful in specific scenarios (e.g., overriding bubbling). | Commonly used in delegation.          |

### **Stopping Event Propagation in Capturing:**
You can use `stopPropagation()` to halt the event propagation during the capturing phase, just like in bubbling.

Would you like me to explore when to use capturing in real-world scenarios or compare it further with bubbling?