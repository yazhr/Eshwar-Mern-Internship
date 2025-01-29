import React from 'react';
import C3 from './C3';

const C2 = (props) => {
    var msg="Hello from component2";
    return (
        <div>
            <h1>{props.message}</h1>
            <h2>Component C2</h2>
            <C3 message={msg}/> {/* Render C3 inside C2 */}
        </div>
    );
};

export default C2;
