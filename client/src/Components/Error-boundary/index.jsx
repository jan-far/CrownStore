import React, { Component } from 'react';

import {
  ErrorImageOverlay,
  ErrorImageText,
  ErrorImageContainer,
} from './Error-boundatyElements';

class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    // process the error
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log('I am the error' + error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <ErrorImageOverlay>
            <ErrorImageContainer imageUrl="https://i.imgur.com/yW2W9SC.png" />
            <ErrorImageText> Sorry this page is broken</ErrorImageText>
          </ErrorImageOverlay>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
