import React from 'react';

function tol33t(text) {
    const l33tDictionary = {
        'a': '4',
        'o': '0',
        'e': '3',
        'l': '1',
        'h': '#',
        's': '$',
        't': '7'

    };
    // convert text to array
    const asArray = text.split('');
    // translate each letter to l33t
    const newArray = asArray.map(letter => {
        return l33tDictionary[letter.toLowerCase()] || letter;
    });
    // return array as a string
    return newArray.join('');
}
function Output(props) {
    // return (
    //     <div>
    //         {
    //             props.transform === "l33t" ? 
    //             tol33t(props.text) : 
    //             props.text.toUpperCase()
    //             }
    //     </div>
    // );

// better practice to move decisions outside of return
    let displayText = props.text.toUpperCase();
    if (props.transform === "l33t") {
        displayText = tol33t(props.text);
    }
    return (
        <div>
            {displayText}
        </div>
    );
}
export default Output;