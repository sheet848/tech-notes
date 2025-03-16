To create your own version of `combineReducers`, you need to implement a utility function that takes multiple reducers and combines them into a single root reducer. This root reducer delegates updates to specific parts of the state to their corresponding reducers.

Here's an example implementation:

```javascript
function myCombineReducers(reducers) {
  return function rootReducer(state = {}, action) {
    const newState = {};

    // Iterate through all reducers
    for (const key in reducers) {
      if (reducers.hasOwnProperty(key)) {
        // Call each reducer with its slice of state
        newState[key] = reducers[key](state[key], action);
      }
    }

    return newState;
  };
}
```

### How It Works:
1. `myCombineReducers` accepts an object where keys represent state slices, and values are their respective reducers.
2. The returned `rootReducer` function:
   - Loops through each key in the `reducers` object.
   - Calls each reducer with its specific slice of state and the dispatched action.
   - Returns a new combined state object.

### Example Usage:
Let's see how we can use this custom `combineReducers`:

#### Step 1: Define Reducers
```javascript
function userReducer(state = { id: null, name: '' }, action) {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, ...action.payload };
    case 'LOGOUT':
      return { id: null, name: '' };
    default:
      return state;
  }
}

function postsReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_POST':
      return [...state, action.payload];
    default:
      return state;
  }
}
```

#### Step 2: Combine the Reducers
```javascript
const rootReducer = myCombineReducers({
  user: userReducer,
  posts: postsReducer,
});
```

#### Step 3: Initialize State and Dispatch Actions
```javascript
let state = rootReducer(undefined, {});
console.log('Initial State:', state); // { user: { id: null, name: '' }, posts: [] }

state = rootReducer(state, { type: 'LOGIN', payload: { id: 1, name: 'Sheetal' } });
console.log('After Login:', state); // { user: { id: 1, name: 'Sheetal' }, posts: [] }

state = rootReducer(state, { type: 'ADD_POST', payload: { id: 101, title: 'My First Post' } });
console.log('After Adding Post:', state); // { user: { id: 1, name: 'Sheetal' }, posts: [{ id: 101, title: 'My First Post' }] }
```

---

This implementation mimics the behavior of Redux's `combineReducers` and helps in managing multiple reducers efficiently. If you'd like me to expand on this further or explain any part in detail, just let me know!