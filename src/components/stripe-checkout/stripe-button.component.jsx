import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton =({price})=>{
    const priceForStripe = price * 100;
    const puplishableKey = 'pk_test_51HViFDD7DI80Xib2JTYjWB5nGozbGrBzE16iUQN9txuDrfsg74MvbfrIW5HZ5lgK34ZC1Hgo85YWMtOWCUwiQKd000926RT3es';
    const onToken = token =>{
        console.log(token);
        alert('payment successful');
    }
    return(
        <StripeCheckout
            label ='Pay Now'
            name = 'CRWN-Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total price is $${price}`}
            amount ={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={puplishableKey}
        />
    );
};

export default StripeCheckoutButton;