import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { CartIcon, CartDropdown } from '..';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from './header.styles';

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className="logo"></Logo>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">
                Shop  
            </OptionLink>
            <OptionLink to="/contact">
                Contact  
            </OptionLink>
            {
                currentUser ? (
                    <OptionDiv onClick={() => auth.signOut()}>Sign Out</OptionDiv>
                ) : (
                     <OptionLink to="/signin">
                        Sign In
                    </OptionLink>
                )
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null : <CartDropdown />
        }
        
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    hidden: selectCartHidden,
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(Header);