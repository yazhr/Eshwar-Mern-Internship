import React from 'react';
import C4 from './C4';

const C3 = (props) => {
    var msg="hello from component3"
    return (
        <div>
            <h2>{props.message}</h2>
            <h3>Component C3</h3>
            <C4 message={msg}/> {/* Render C4 inside C3 */}
        </div>
    );
};

export default C3;