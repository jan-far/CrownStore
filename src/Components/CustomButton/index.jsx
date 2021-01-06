import React from 'react';
import { CustomButtonContainer } from './Custom-button-element';

const CustomButton = ({ children, ...props}) => {
  return (
    <CustomButtonContainer
      {...props}
    >
      {children}
    </CustomButtonContainer>
  );
};

export default CustomButton;
