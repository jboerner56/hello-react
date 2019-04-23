// import react
import React from 'react';

class ClickCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        };
    }
    render() {
        return (
            <div>
            <h2>{this.state.number}</h2>
            <button 
                onClick={this._incrementNumber}
            >+</button>
            </div>
        );
    }
    _incrementNumber = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

}


// export 
export default ClickCounter;