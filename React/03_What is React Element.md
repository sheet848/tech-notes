A React Element is the smallest building block of a React application. It is essentially a plain JavaScript object that describes what you want to see on the screen. React Elements represent the UI elements (like HTML tags) in a React application but are more powerful because React uses them to efficiently update and render the UI.

### Key Characteristics of React Elements:

1. **Immutable**: Once you create a React Element, it cannot be changed. If the UI needs to change, React creates a new element and efficiently updates the DOM using its Virtual DOM mechanism.
    
2. **Virtual Representation**: React Elements are not the actual DOM elements; they are lightweight representations of DOM nodes, used to construct and update the Virtual DOM.
    
3. **Created with** `React.createElement`:
    
    - React Elements are typically created using `React.createElement` or JSX (a syntax extension that makes writing elements easier).
        

### Example:

Here’s how a React Element looks:

```
const element = React.createElement('h1', { className: 'greeting' }, 'Hello, world!');

```

Or, using JSX (commonly used):

```
const element = <h1 className="greeting">Hello, world!</h1>;

```