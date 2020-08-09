import React from 'react';
import './cart-dropdown.styles.scss';
import { CustomButton } from '..';

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items">
        </div>
        <CustomButton>Go To Checkout</CustomButton>
    </div>
);

export default CartDropdown;

