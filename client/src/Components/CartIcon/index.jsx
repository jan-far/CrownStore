import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../Redux/cart/cart.actions';
import { selectCartItemsCount } from '../../Redux/cart/cart.selector';

import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer,
} from './CartIconElements';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartContainer onClick={toggleCartHidden}>
    <ShoppingIcon />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartContainer>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
