import React, {Component} from "react";

class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
      this.state = {
          hasErrors: false
      }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasErrors:true})
    }

    render() {
        if (this.state.hasErrors) {
            return <h1>Oooops, That is not good.</h1>
        } else {
            return this.props.children
        }
    }
}

export default ErrorBoundary