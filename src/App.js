// just like requrie in node.js code
// ES6 style imports (as opposed to calling require)
import React from 'react'; // pull in the React library itself. 
                           // put this in every .js file in the project
import logo from './logo.svg'; // import an image. (React will do optimization)
import './App.css'; // recommendation: no individual style files. just use index.css

import Greet from './Greet';
import Counter from './Counter';
import ClickCounter from './ClickCounter';
import Output from './Output';
//"App is a component"
// a component is a function that returns a react element 
// a react element if a description of a DOM element (or tree)
// the most common way to specify a react element is by using JSX.
class App extends React.Component{
constructor(props) {
  super(props);

  this.state = {
    inputText: '',
    names: ["bob","happy", "chubbs"]
  };
}
  render () {

    return (
      <div className="App">
      <header className="App-header">
      <ul>
        {
          // return after arrow function before li's is implied but does not have to be written
          this.state.names.map(n => <li>{n}</li>)
          // can also explicitly use return
          // names.map(n => 
          // return 
          // {
          //   <li>{n}</li>)
          // }
        }
      </ul>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <input
        onChange={
          this._updateInputText
        }
        />
        <Output 
        text={this.state.inputText}/>

        <Output 
        text={this.state.inputText}
        transform="l33t"
        />
        {/* <ClickCounter startAt={135664} />
        <ClickCounter />
        <Greet whom="Bob Barker" 
        />
      <Greet /> */}

        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a> */}
      </header>
    </div>
  );
  }

  _updateInputText = (e) => {
    console.log('typing something still');
    console.log(e.target.value);

    // this is a request for a change that'll take place at some point in the future.
    this.setState({
      inputText: e.target.value
    });
  }
}
// equivalent to module.exports
export default App;
