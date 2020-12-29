import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../Redux/cart/cart.actions';
import { selectCartItem } from '../../Redux/cart/cart.selector';
import CartItem from '../CartItem';
import CustomButton from '../CustomButton';
import './cart-dropdown.styles.scss';

const CartDropDown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is Empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItem(state),
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
