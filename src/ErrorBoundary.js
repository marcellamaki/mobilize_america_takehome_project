import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please try refreshing the page. Still having trouble? <a href="mailto:techsupport@mobilizeamerica.io">Contact Us!</a></h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary
