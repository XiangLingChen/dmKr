import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
     const priceForStripe = price * 100;
     const publishableKey = 'pk_test_7u8iyKCEQDmKKf2nDv1p56OD00cXWsNcX2'

    const onToken = token => {
        console.log(token);
        alert('Payment Successful !');
    };

    return (
         <StripeCheckout 
            label='Pay Now'
            name='dm-drogerie markt GmbH + Co. KG'
            billingAddress
            shippingAddress
            image='https://imgur.com/2roXrvZ.png'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
         />
     )
};


export default StripeCheckoutButton;