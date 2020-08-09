import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import{ selectCartTotal, selectCartItems } from '../../redux/cart/cart.selectors';
import { CheckoutItem } from '../../components';


import './checkout.styles.scss';

const CheckoutPage = ({cartItems, cartTotal}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>)
        }
        <div className="Total">
            <span>Total: ${cartTotal}</span>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);