import './App.css'
import Products from './components/Products'
import Cart from './components/Cart'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { shoppingCartReducer } from './redux/reducers'

const store = createStore(shoppingCartReducer);

function App() {

  return (
    <>
      <h1>Shopping Cart App</h1>
      <Provider store={store}>
        <Products />
        <Cart />
      </Provider>
    </>
  )
}

export default App
