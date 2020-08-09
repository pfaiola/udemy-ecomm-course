import React from 'react';
import { connect } from 'react-redux';
import { Link} from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import './header.styles.scss';
import { CartIcon, CartDropdown } from '..';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo"></Logo>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                Shop  
            </Link>
            <Link className="option" to="/contact">
                Contact  
            </Link>
            {
                currentUser ? (
                    <div className="option" onClick={() => auth.signOut()}>Sign Out</div>
                ) : (
                     <Link className="option" to="/signin">
                        Sign In
                    </Link>
                )
            }
            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropdown />
        }
        
    </div>
)

const mapStateToProps = createStructuredSelector({
    hidden: selectCartHidden,
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(Header);