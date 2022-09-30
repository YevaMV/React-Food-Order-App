import { useContext } from 'react';

import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

function MealItem(props) {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const addToCarthandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
      </div>
      <div className={classes.form}>
        <div className={classes.price}>{price}</div>
        <MealItemForm onAddToCart={addToCarthandler} />
      </div>
    </li>
  );
}

export default MealItem;
