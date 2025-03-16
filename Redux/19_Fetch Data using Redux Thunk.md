Fetching data using Redux Thunk involves dispatching asynchronous actions to handle API calls. Redux Thunk acts as middleware that lets you write action creators that return a function (instead of an action object), enabling side effects like fetching data.

Here’s how you can fetch data using Redux Thunk:

---

### 1. **Install Redux Thunk**
Make sure you have Redux Thunk installed.

```bash
npm install redux-thunk
```

---

### 2. **Configure Store**
Include Redux Thunk middleware in your Redux store configuration.

```javascript
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
```

---

### 3. **Create Async Action**
Define an asynchronous action creator using Redux Thunk to fetch data.

```javascript
// Action Types
const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

// Async Action Creator
export const fetchData = () => async (dispatch) => {
  dispatch({ type: FETCH_DATA_REQUEST }); // Dispatch request action

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    dispatch({ type: FETCH_DATA_SUCCESS, payload: data }); // Dispatch success action with data
  } catch (error) {
    dispatch({ type: FETCH_DATA_FAILURE, payload: error.message }); // Dispatch failure action with error
  }
};
```

---

### 4. **Handle Actions in Reducer**
Define a reducer to handle the dispatched actions.

```javascript
const initialState = {
  loading: false,
  data: [],
  error: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default dataReducer;
```

---

### 5. **Dispatch Async Action**
Trigger the `fetchData` action from your component when you need to fetch the data.

```javascript
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from './actions';

const DataComponent = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Data:</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataComponent;
```

---

This structure keeps your code organized, makes async actions manageable, and separates concerns effectively. Let me know if you'd like more customization tips, like adding retries or caching!