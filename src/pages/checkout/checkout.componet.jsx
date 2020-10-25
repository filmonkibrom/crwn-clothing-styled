import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartItemTotal} from '../../redux/cart/cart.selectors';


import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-checkout/stripe-button.component';

import './checkout.styles.scss'


const CheckoutPage =({cartsItems, total})=>(
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='checkout-block'>
                <span>Product</span>
            </div>
            <div className='checkout-block'>
                <span>Description</span>
            </div>
            <div className='checkout-block'>
                <span>Quantity</span>
            </div>
            <div className='checkout-block'>
                <span>Total</span>
            </div>
            <div className='checkout-block'>
                <span>Remove</span>
            </div>
        </div>
        {cartsItems.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            ))}
            <div className='total'>TOTAL: ${total}
                <span> <StripeCheckoutButton price={total}/> </span>
            </div>
                <div className='test-warning'>
                    *Please use the following test credit card fir payments*
                    <br/>
                    4242 4242 4242 4242 4242 -exp: 01/23 -CVC: 123
                </div>
             
    </div>
);


const mapStateToProps= createStructuredSelector({
    cartsItems : selectCartItems,
    total : selectCartItemTotal
})
export default (connect)(mapStateToProps)(CheckoutPage);