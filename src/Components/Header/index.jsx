import React from 'react';
import { ReactComponent as Logo } from '../../asset/crown.svg';
import { connect } from 'react-redux';
import CartIcon from '../CartIcon';
import CartDropDown from '../CartDropDown';
import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionContainer,
} from './header.styled';
import { signOutStart } from '../../Redux/user/user.action';

const Header = ({ currentUser, hidden, signOutStart }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="#">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink to="/" onClick={signOutStart}>
            SIGN OUT
          </OptionLink>
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

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
