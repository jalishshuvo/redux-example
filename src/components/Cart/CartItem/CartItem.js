import React, { useState } from "react";
import styles from "./CartItem.module.css";

import { connect } from "react-redux";
import {
  removeFromCart,
  updateQty,
} from "../../../redux/Shopping/shopping-actions";

const CartItem = ({ itemData, removeItem, updateQty }) => {
  const [input, setInput] = useState(itemData.qty);

  const onChangeHandler = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
    updateQty(itemData.id, e.target.value);
  };
  return (
    <div className={styles.cartItem}>
      <img
        className={styles.cartItem__image}
        src={itemData.image}
        alt={itemData.title}
      />
      <div className={styles.cartItem__details}>
        <p className={styles.details__title}> {itemData.title} </p>
        <p className={styles.details__desc}> {itemData.description}</p>
        <p className={styles.details__price}> {itemData.price}</p>
      </div>
      <div className={styles.cartItem__actions}>
        <div className={styles.cartItem__qty}>
          <label htmlFor="qty">Qty</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </div>
        <button className={styles.actions__deleteItemBtn}>
          <img
            onClick={() => removeItem(itemData.id)}
            src="https://image.flaticon.com/icons/svg/709/709519.svg"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => dispatch(removeFromCart(id)),
    updateQty: (id, value) => dispatch(updateQty(id, value)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
