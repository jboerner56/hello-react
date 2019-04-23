// import react
import React from 'react';

class ClickCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // use props.startAt if given a value. else use 0 as the starting value
            number: props.startAt || 0
        };
    }
    render() {
        return (
            <div>
            <h2>{this.state.number}</h2>
            <button 
                onClick={this._incrementNumber}
            >+</button>
            <button
            onClick={this._decrementNumber}
            >-</button>
            </div>
        );
    }
    _incrementNumber = () => {
        this.setState({
            number: this.state.number + 1
        });
    }
    _decrementNumber = () => {
        this.setState({
            number: this.state.number - 1
        });
    }

}


// export 
export default ClickCounter;