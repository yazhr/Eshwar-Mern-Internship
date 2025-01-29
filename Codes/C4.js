import React from 'react';
import C5 from './C5';

const C4 = (props) => {
    var msg="Hello from component4"
    return (
        <div>
            <h3>{props.message}</h3>
            <h4>Component C4</h4>
            <C5 message={msg}/> {/* Render C5 inside C4 */}
        </div>
    );
};

export default C4;
