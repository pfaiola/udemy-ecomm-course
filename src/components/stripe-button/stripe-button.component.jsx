import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HEQrVEeiQTAtvvF5CAlcMEfD5Vrsa88uhxLYuT1PqJ11ARAI31swtNoK0JcFnFfM9A5sRGpwyuqLTxtyzWFYL6000v7gn5gL9';

    const onToken = token => {
        alert('Token');
    };

    return (
        <StripeCheckout label="Pay Now" name="OMS Ecomm" billingAddress shippingAddress image="https://svgshare.com/i/CUz.svg"
        description={`Your total is $${price}`} amount={priceForStripe} panelLabel="Pay Now" token={onToken}
        stripeKey={publishableKey}  />
    )
}

export default StripeCheckoutButton;