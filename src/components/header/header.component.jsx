import React from 'react';
import { connect } from 'react-redux';
import { Link} from 'react-router-dom';

import './header.styles.scss';
import { CartIcon, CartDropdown } from '..';
import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';

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

const mapStateToProps = ({user: {currentUser}, cart: { hidden }}) => ({
    currentUser,
    hidden

})

export default connect(mapStateToProps)(Header);