Creating your own version of Redux Toolkit involves building utilities that simplify Redux setup, combining functionality such as defining reducers, managing actions, and configuring the store. Here's a step-by-step approach to implementing a basic version of a "Redux Toolkit":

---

### **Step 1: `createSlice` - Define Reducers and Actions**
The `createSlice` utility combines actions and reducers into a single, modular function.

Here’s how it might look:
```javascript
function createSlice({ name, initialState, reducers }) {
  const actionTypes = {};
  const actions = {};

  // Create action types and action creators
  Object.keys(reducers).forEach((key) => {
    const type = `${name}/${key}`;
    actionTypes[key] = type;
    actions[key] = (payload) => ({ type, payload });
  });

  // Create the reducer
  const reducer = (state = initialState, action) => {
    const actionKey = Object.keys(actionTypes).find(
      (key) => actionTypes[key] === action.type
    );
    if (actionKey) {
      return reducers[actionKey](state, action.payload);
    }
    return state;
  };

  return { reducer, actions };
}
```

---

### **Step 2: `configureStore` - Setup the Redux Store**
`configureStore` initializes the Redux store and integrates middleware. Here’s a simplified version:
```javascript
import { createStore, applyMiddleware, combineReducers } from 'redux';

function configureStore({ reducer, middleware = [] }) {
  const rootReducer = combineReducers(reducer);
  const store = createStore(rootReducer, applyMiddleware(...middleware));
  return store;
}
```

---

### **Step 3: Usage**

1. **Define a Slice**
   Use `createSlice` to define a slice of state, its reducers, and its actions:
   ```javascript
   const counterSlice = createSlice({
     name: 'counter',
     initialState: { count: 0 },
     reducers: {
       increment(state) {
         return { count: state.count + 1 };
       },
       decrement(state) {
         return { count: state.count - 1 };
       },
       incrementByAmount(state, payload) {
         return { count: state.count + payload };
       },
     },
   });

   const { reducer: counterReducer, actions: counterActions } = counterSlice;
   ```

2. **Set Up the Store**
   Configure the store with the slice reducer:
   ```javascript
   const store = configureStore({
     reducer: {
       counter: counterReducer,
     },
   });
   ```

3. **Dispatch Actions and Subscribe to State Changes**
   Use the store and actions:
   ```javascript
   store.subscribe(() => console.log('State:', store.getState()));

   store.dispatch(counterActions.increment());
   store.dispatch(counterActions.incrementByAmount(5));
   store.dispatch(counterActions.decrement());
   ```

---

### **Step 4: Expand Features**
Enhance your toolkit by adding:
- **Middleware support**: Include middleware like Redux Thunk for async logic.
- **DevTools Integration**: Integrate Redux DevTools for debugging.
- **Extra Reducers**: Add functionality to handle actions from other slices.

---

By following these steps, you've built a basic Redux Toolkit-inspired library that simplifies the process of managing state. Let me know if you'd like to dive deeper into adding features like middleware or async capabilities!