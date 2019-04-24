// custom components should start with a capital letter

//#1 import react
import React from 'react';
// node.js would look like
// const react = require('react');

//#3 declare component

export class Greet extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: props.whom || "You"
        };
    }
    render() {
        return (
        <div>
            <h3>{this.state.name}</h3>
            <button
            onClick={this._lowercase}>Lowercase</button>
        </div>
        )
    }
    _lowercase = () => {
        this.setState({
            whom: (this.state.whom).toLowerCase()
        });
    }
} 




//#2 export the component
export default Greet; 
// make the component name match the file name
// by 'default' if someone imports from Greet.js, they should receive the Greet component