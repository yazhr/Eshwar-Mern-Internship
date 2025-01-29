import React from 'react';

export const Child = ({ message }) => {
    return (
        <div>
            <h2>This is Child Component</h2>
            <p>{message}</p>
        </div>
    );
};