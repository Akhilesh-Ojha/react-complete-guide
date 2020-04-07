import React from 'react';
import '../Cockpit/Cockpit.css'
import Radium from 'radium';

const cockPit = (props) => {
    const style = {
        backgroundColor: 'green',
        color: 'white',
        border: '1px solid blue',
        padding: '8px',
        cusror: 'pointer',
        ':hover': {
          backgroundColor: 'lightGreen',
          color: 'black'
        }
    }

    let classes = [];
    if(props.persons.length >= 3) {
      classes = [];
    } else if (props.persons.length === 2) {
      classes = ['red']
    } else {
      classes = ['red' , 'bold'].join(' ');  // "red bold"
    }

    if(props.showPerson) {
        style.backgroundColor = 'red';
          style[':hover'] = {
            backgroundColor: 'salmon',
            color: 'black'
        }
    }
    return(
        <div>
          <h1 className="App-title">Person Cards</h1>
          <p className={classes}>The styling here works</p>
          { props.showPerson ?
          <div>
            <button style={style} onClick={props.clicked}>Hide Persons</button> 
          </div> : <button style={style} onClick={props.clicked}>Show Persons</button> 
          }
          { props.showPerson ? 
            <div className="addPerson">
                <input type="text" className="margin" placeholder="Enter Name" onChange={props.nameChanged}></input>
                <input type="number" className="margin" placeholder="Enter Age" onChange={props.ageChanged}></input>
                <button className="margin" onClick={props.addPerson}>Add Person</button>
            </div> : null
          }
          
        </div>
    );
}

export default Radium(cockPit);