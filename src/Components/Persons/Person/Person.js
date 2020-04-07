import React from 'react';
import './Person.css'

const person = (props) => {
    return(
        <div className="Person">
            <p>{props.name}, age: {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
            <button className="btn" onClick={props.click}>Delete Person</button>
        </div>
    ); 
}

export default person;