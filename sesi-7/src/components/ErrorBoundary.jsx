import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      isAppError: false,
    };
  }

  static getDerivedStateFromError() {
    console.log("error happened");
    return {
      isAppError: true,
    };
  }

  render() {
    if (this.state.isAppError) {
      return <div>Something went wrong</div>;
    }
    return <div>{this.props.children}</div>;
  }
}
