import * as React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log('Catch error!', error);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h2 className="text-center my-5">Something went wrong :.(</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;