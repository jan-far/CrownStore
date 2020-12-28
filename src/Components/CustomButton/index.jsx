import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleBtn, inverted, ...otherProps }) => {
  return (
    <button
      className={`${inverted ? 'inverted' : ''} ${
        isGoogleBtn ? 'google-sign-in' : ''
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
