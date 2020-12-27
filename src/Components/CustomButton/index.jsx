import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleBtn, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleBtn ? 'google-sign-in' : ''} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
