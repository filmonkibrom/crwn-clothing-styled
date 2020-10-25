import React from 'react';
import { connect } from 'react-redux';

import { clearItem, addItem, removeItem } from '../../redux/cart/cart.actions';

import './checkout-item.statyles.scss';

const CheckoutItem = ({ cartItem, clear, add, remove }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
          <div className='arrow' onClick={()=> remove(cartItem)}>&#10094;</div>
          <div className='value'>{quantity}</div>
          <div className='arrow' onClick={()=> add(cartItem)}>&#10095;</div>
          </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => clear(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapstateToProps = dispatch => ({
  clear: item => dispatch(clearItem(item)),
  add: item => dispatch(addItem(item)),
  remove: item => dispatch(removeItem(item))
});

export default connect(
  null,
  mapstateToProps
)(CheckoutItem);
