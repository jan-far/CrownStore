import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckOutItem from "../../Components/CheckOutItem";
import StripeCheckoutButton from "../../Components/Stripe";
import { selectCartItem, selectCartTotal } from "../../Redux/cart/cart.selector";

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer,
} from "./checkoutElements";

const CheckOutPage = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Description</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Quantity</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Price</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {cartItems.map((cartItem) => (
      <CheckOutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalContainer>TOTAL: ${total}</TotalContainer>
    <WarningContainer>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: {new Date().getMonth() + 1}/
      {parseInt(String(new Date().getFullYear()).substring(2))} - CVV: 123
    </WarningContainer>
    <StripeCheckoutButton price={total} />
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItem,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckOutPage);
