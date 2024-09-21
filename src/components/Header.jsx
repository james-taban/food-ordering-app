/* eslint-disable react/react-in-jsx-scope */
import { useContext } from 'react';
import logoImg from '../assets/logo.jpg';
import Button from './UI/Button';
import CartContext from '../store/CartContext';
import UserProgessContext from '../store/UserProgressContext';

export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgessContext);

  const noOfItems = cartCtx.items.reduce((totalNumberofItems, item) => {
    return totalNumberofItems + item.quantity;
  }, 0);

  function handleShowCart() {
    console.log('Progress: ', userProgressCtx.progress);
    console.log('clicked');
    userProgressCtx.showCart();
    console.log('Progress: ', userProgressCtx.progress);
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart ({noOfItems})
        </Button>
      </nav>
    </header>
  );
}
