import React from 'react';
import C2 from './C2';

const C1 = (props) => {
    var msg="hello from component1";
    return (
        <div>
            <h1>Component C1</h1>
            <C2 message={msg} /> {/* Render C2 inside C1 */}
        </div>
    );
};

export default C1;
