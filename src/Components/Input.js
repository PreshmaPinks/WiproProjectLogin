import React from 'react';
import '../Common.css';

function Input(props)
{
    return(
        <>
        <div className="inputParentdiv">
        <input type={props.Type} className="Input" placeholder={props.Placeholder} onChange={props.onchangefunc} value={props.val}></input>
        </div>
        </>
    );
}

export default Input;