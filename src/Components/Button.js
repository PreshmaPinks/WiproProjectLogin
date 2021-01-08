import React from 'react';
import '../Common.css';

function Button(props) {
    return (
        <>
            <div className="buttonDiv">
                <button className="Button" onClick={props.clickmethod}>Login</button>
            </div>
        </>
    );
}

export default Button;