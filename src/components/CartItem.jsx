/* eslint-disable react/prop-types */

import { currencyFormatter } from '../util/formatting';

/* eslint-disable react/react-in-jsx-scope */

export default function CartItem({ item, onIncrease, onDecrease }) {
  return (
    <li className="cart-item">
      <p>
        {item.name} - {item.quantity} X {currencyFormatter.format(item.price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={onDecrease}>-</button>
        <span>{item.quantity}</span>
        <button onClick={onIncrease}>+</button>
      </p>
    </li>
  );
}
