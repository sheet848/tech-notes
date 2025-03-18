Event bubbling is a core concept in JavaScript's event handling mechanism. It describes the process where an event triggered on a child element propagates (or "bubbles") up through its parent elements, eventually reaching the document's root. Here's how it works:

### **How Event Bubbling Works:**
1. When an event occurs, like a `click` on a button inside a parent container, it first triggers on the child (where the event occurred).
2. It then "bubbles up," triggering the same event on the parent, the grandparent, and so on, until it reaches the top of the DOM tree.

For example, imagine you have the following structure:
```html
<div id="parent">
  <button id="child">Click Me</button>
</div>
```
If you click on the button, the event will first trigger on the button itself, then on its parent `<div>`, and so on.

### **Code Example:**
Here's a simple demonstration of event bubbling:
```javascript
document.getElementById("child").addEventListener("click", function() {
    console.log("Button clicked");
});

document.getElementById("parent").addEventListener("click", function() {
    console.log("Parent div clicked");
});
```
If you click the button:
1. The button's event listener logs "Button clicked."
2. The parent div's event listener logs "Parent div clicked."

### **Stopping Event Bubbling:**
You can use the `stopPropagation()` method to prevent an event from propagating further up the DOM tree:
```javascript
document.getElementById("child").addEventListener("click", function(event) {
    console.log("Button clicked");
    event.stopPropagation(); // Stops the event from bubbling
});

document.getElementById("parent").addEventListener("click", function() {
    console.log("Parent div clicked"); // This won't be logged
});
```

### **Key Points to Remember:**
- Event bubbling can be useful for scenarios like event delegation, where you listen for events on a parent element instead of individual child elements.
- If needed, you can stop bubbling with `stopPropagation()` to ensure only specific event handlers are executed.

Would you like me to dive deeper into any aspect, like comparing bubbling with *event capturing* or exploring real-world use cases?