import React, {Component} from 'react';

class ErrorBoundry extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false
        }
    }

    render(){
        if (this.props.hasError) {
            return <h1>Error Happened Somewhere</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry;