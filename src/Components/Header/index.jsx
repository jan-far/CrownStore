import React from 'react';
import { ReactComponent as Logo } from '../../asset/crown.svg';
import { auth } from '../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../CartIcon';
import CartDropDown from '../CartDropDown';
import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionContainer,
} from './header.styled';

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo/>
      </LogoContainer>
      <OptionContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="#">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionContainer>
      {hidden ? null : <CartDropDown />}
    </HeaderContainer>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
