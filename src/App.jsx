/* eslint-disable react/react-in-jsx-scope */
import Cart from './components/Cart';
import CheckOut from './components/Checkout';
import Header from './components/Header';
import Meals from './components/Meals';
import { CartContextProvider } from './store/CartContext';
import { UserProgessContextProvider } from './store/UserProgressContext';

function App() {
  return (
    <UserProgessContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <CheckOut />
      </CartContextProvider>
    </UserProgessContextProvider>
  );
}

export default App;
