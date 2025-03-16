Creating your own React-Redux library would mean implementing a minimal version of the bindings that connect React and Redux. The key functionality of a React-Redux library includes:

1. **Providing the Redux store to React components.**
2. **Connecting React components to the Redux state and dispatch.**

Here's how you can build a basic version of React-Redux:

---

### **Step 1: Create a `Provider` Component**
The `Provider` component allows you to pass the Redux store to React components via context.

```javascript
import React, { createContext, useContext } from 'react';

// Create a Context for the Redux store
const ReduxContext = createContext();

export function Provider({ store, children }) {
  return (
    <ReduxContext.Provider value={store}>
      {children}
    </ReduxContext.Provider>
  );
}

// Custom hook to access the Redux store
export function useStore() {
  return useContext(ReduxContext);
}
```

---

### **Step 2: Create `connect` Function**
The `connect` function maps Redux state and dispatch to the props of a React component.

```javascript
import React from 'react';
import { useStore } from './Provider';

export function connect(mapStateToProps, mapDispatchToProps) {
  return function (Component) {
    return function ConnectedComponent(props) {
      const store = useStore();
      const { getState, dispatch } = store;

      // Map state and dispatch to props
      const stateProps = mapStateToProps(getState());
      const dispatchProps = mapDispatchToProps(dispatch);

      // Pass mapped props and original props to the component
      return <Component {...props} {...stateProps} {...dispatchProps} />;
    };
  };
}
```

---

### **Step 3: Use the Custom React-Redux Library**

#### Define Redux Store
Create a Redux store using your reducer:
```javascript
import { createStore } from 'redux';

const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

const store = createStore(counterReducer);
export default store;
```

---

#### Use Provider and Connect in React
Use the `Provider` to pass the Redux store and `connect` to access state and dispatch in components:

```javascript
import React from 'react';
import { Provider } from './Provider';
import { connect } from './connect';
import store from './store';

// Counter Component
function Counter({ count, increment, decrement }) {
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

// Map state and dispatch to props
const mapStateToProps = (state) => ({ count: state.count });
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: 'INCREMENT' }),
  decrement: () => dispatch({ type: 'DECREMENT' }),
});

// Connect Counter component
const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

// App Component
function App() {
  return (
    <Provider store={store}>
      <ConnectedCounter />
    </Provider>
  );
}

export default App;
```

---

This is a minimal implementation of a React-Redux library. For a production-ready version, you'd want to handle edge cases, optimize performance (e.g., with memoization), and support more advanced features like middleware and asynchronous actions. If you'd like to dive deeper into optimizations or other features, just let me know!