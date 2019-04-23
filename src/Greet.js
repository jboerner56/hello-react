// custom components should start with a capital letter

//#1 import react
import React from 'react';
// node.js would look like
// const react = require('react');



//#3 declare component
function Greet() {
    // every component must return a react element.
    return (
        <h1>Hey You</h1>
    );
}




//#2 export the component
export default Greet; 
// make the component name match the file name
// by 'default' if someone imports from Greet.js, they should receive the Greet component