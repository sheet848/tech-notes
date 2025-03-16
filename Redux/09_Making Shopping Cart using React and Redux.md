Building a shopping cart application using React and Redux is a fun and practical way to learn state management. Here's a step-by-step guide to create one:

---

### **Step 1: Setting Up the Project**
1. Create a new React app:
   ```bash
   npx create-react-app shopping-cart
   cd shopping-cart
   npm install redux react-redux
   ```
2. Open your project in your favorite code editor.

---

### **Step 2: Designing the State**
We'll need a structure for our application state. Here's an example:

```javascript
const initialState = {
  products: [
    { id: 1, name: 'Laptop', price: 50000 },
    { id: 2, name: 'Phone', price: 30000 },
  ],
  cart: [], // Items added to the shopping cart
};
```

---

### **Step 3: Create Actions and Reducer**
Define the action types and a reducer to handle adding and removing items from the cart.

#### Actions:
```javascript
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
```

#### Reducer:
```javascript
function shoppingCartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id),
      };

    default:
      return state;
  }
}
```

---

### **Step 4: Create the Redux Store**
Initialize the Redux store:
```javascript
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import shoppingCartReducer from './reducer'; // Your reducer file

const store = createStore(shoppingCartReducer);

function App() {
  return (
    <Provider store={store}>
      {/* App components go here */}
    </Provider>
  );
}

export default App;
```

---

### **Step 5: Create Components**
#### (a) **Products Component**
Displays the list of products and allows users to add them to the cart:
```javascript
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Products() {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ₹{product.price}{' '}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
```

#### (b) **Cart Component**
Displays items in the cart and provides an option to remove them:
```javascript
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Cart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - ₹{item.price}{' '}
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
```

---

### **Step 6: Combine Components in App**
Bring everything together in the `App` component:
```javascript
import React from 'react';
import Products from './Products';
import Cart from './Cart';

function App() {
  return (
    <div>
      <h1>Shopping Cart App</h1>
      <Products />
      <Cart />
    </div>
  );
}

export default App;
```

---

### **Step 7: Run the Application**
Start the development server:
```bash
npm start
```
You should now see a shopping cart app where users can add products to the cart and remove them as needed.

---

This is a basic implementation. You can expand on it by adding features like:
- **Quantity Management**: Allow users to select the quantity of each product in the cart.
- **Total Calculation**: Display the total price of items in the cart.
- **Persisted State**: Use `localStorage` or `redux-persist` to save the cart between sessions.

Let me know if you'd like to enhance any part of this or dive deeper into additional features!