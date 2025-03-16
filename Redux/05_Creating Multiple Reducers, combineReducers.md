Using multiple reducers and combining them with `combineReducers` is a key feature of Redux that helps in managing complex state effectively. Here's how you can do it step by step:

---

### 1. **Define Your Initial State**
Divide your application's state into logical slices. For example:
```javascript
const userInitialState = {
  id: null,
  name: '',
  loggedIn: false,
};

const postsInitialState = {
  byId: {},
  allIds: [],
};
```

---

### 2. **Create Separate Reducers for Each Slice**
Write reducers that handle specific parts of the state:
```javascript
function userReducer(state = userInitialState, action) {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, ...action.payload, loggedIn: true };
    case 'LOGOUT':
      return { ...state, id: null, name: '', loggedIn: false };
    default:
      return state;
  }
}

function postsReducer(state = postsInitialState, action) {
  switch (action.type) {
    case 'ADD_POST':
      const { id, title } = action.payload;
      return {
        ...state,
        byId: { ...state.byId, [id]: { id, title } },
        allIds: [...state.allIds, id],
      };
    default:
      return state;
  }
}
```

---

### 3. **Combine Reducers Using `combineReducers`**
Use `combineReducers` to merge the individual reducers into one root reducer:
```javascript
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  user: userReducer,
  posts: postsReducer,
});

export default rootReducer;
```

---

### 4. **Create the Redux Store**
Pass the `rootReducer` to `createStore` to initialize the store:
```javascript
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);
```

---

### 5. **Dispatch Actions and Observe State Changes**
Now you can dispatch actions to update the specific slices of state:
```javascript
store.subscribe(() => console.log('State updated:', store.getState()));

store.dispatch({
  type: 'LOGIN',
  payload: { id: 1, name: 'Sheetal' },
});

store.dispatch({
  type: 'ADD_POST',
  payload: { id: 101, title: 'My First Post' },
});
```

Output of the `store.getState()` will look like:
```javascript
{
  user: { id: 1, name: 'Sheetal', loggedIn: true },
  posts: {
    byId: { '101': { id: 101, title: 'My First Post' } },
    allIds: [101],
  },
}
```

---

This approach keeps your state management modular, organized, and scalable. If you'd like to dive deeper into any of these steps or explore advanced features like middleware, just say the word!