import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price})=>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_live_51JINrSBa4kXGp5zYf0EsLiuUXg2DakIVvmGRAmWZS9nRJdPW9LiEPZRLmWv3sZ9f1z6dwRzWwvyTzEsSKrCKQ67o00AHH73WZx';

    const onToken=token=>{
        console.log(token);
        alert('Payment Successful');
    }

return (
    <StripeCheckout
    label="Pay Now"
    name='CRWN Clothing Ltd.'
    billingAddress
    shippingAddress
    image='https://svgshare.com/i/CUz.svg'
    description={`Your total is $${price}`}
    amount={priceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey={publishableKey}
    />
)

}

export default StripeCheckoutButton;