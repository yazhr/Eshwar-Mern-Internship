import React from 'react';

const C5 = (props) => {
    var msg="hello from component5"
    return (
        <div>
            <h4>{props.message}</h4>
            <h5>Component C5</h5>
            <C5 message={msg}/>
            <p>This is the deepest component!</p>
        </div>
    );
};

export default C5;