// import react
import React from 'react';

// If a component needs to remember things, then a class is needed
class Counter extends React.Component {
    // define how the instance gets created
    // including the initial state
    constructor(props){
        //activate the "super" powers from React.Component
        super(props);
        // this.state is an object
        // where the component stores key value pairs
        this.state = {
            number: 0
        };
    }

    // do more setup when the component gets drawn to page
    componentDidMount() {
        // cant do this. Mutate state directly.
        // this.state.number++


        setInterval(() => {

            // Safely change state using this.setState()
            // it accepts an object with updated key/value pairs
            this.setState({
                number: this.state.number + 1
            });
        }, 100);
    }
    // define what will be drawn
    render() {
        return (
        <h1>
            {this.state.number}
        </h1>
        );
    }
}
// function Counter(props) {
// return (
//     <h1>
//         {props.number}
//     </h1>
// );
// }

// export component
export default Counter;