// CLASS Based

import React, { Component } from 'react';
import './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit'

class App extends Component {
  newNameAdded = '';
  newAgeAdded = '';

  state = {
    persons: [
      {id: 1 ,name: "Akhil", age: 24},
      {id: 2 ,name: "Agam", age: 24},
      {id: 3 ,name: "Shubham", age: 24}
    ],
    showPerson: false,
  }

  onNameChangeHandler = (event , id) => {

    const personChangedIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const changedPerson = {
      ...this.state.persons[personChangedIndex]
    };

    console.log('this.chane', changedPerson);

    changedPerson.name = event.target.value;

    const personsCopy = this.state.persons.slice();

    personsCopy[personChangedIndex] = changedPerson

    this.setState({
      persons: personsCopy
    });
  }

  onAddNameHandler = (event) => {
    this.newNameAdded = event.target.value;
  }

  onAddAgeHandler = (event) => {
    this.newAgeAdded = event.target.value;
  }

  onAddPersonHandler = () => {
    const newPerson = {id: Math.floor(Math.random() * 100) + 3  , name: this.newNameAdded, age: this.newAgeAdded};
    const personsCopy = this.state.persons.slice();
    const newlyAddedPersonInArray = [...personsCopy , newPerson];

    this.setState({
      persons: newlyAddedPersonInArray
    })
  }
  
  deletePersonHandler = (personIndex) => {
    const newPersons = this.state.persons.slice();
    newPersons.splice(personIndex , 1)
    this.setState({persons: newPersons});
  }



  togglePersons = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow})
  }


  render() {
    
    let persons = null

    if(this.state.showPerson) {
      persons = (
      <div>
        <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.onNameChangeHandler}>
        </Persons>
      </div> 
      )
    }

    return (
      <div className="App">
        <Cockpit persons={this.state.persons} 
               showPerson={this.state.showPerson}
               clicked={this.togglePersons}
               nameChanged={this.onAddNameHandler}
               ageChanged={this.onAddAgeHandler}
               addPerson={this.onAddPersonHandler}>
        </Cockpit>
        {persons}
      </div>
    );
  }
}

export default App;


// FUNCTION BASED, USING HOOKS

// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person'

// const app = props => {

//   const [personsState , setPersonsState] = useState({
//     persons: [
//       {name: "Akhil", age: 24},
//       {name: "Agam", age: 24},
//       {name: "Shubham", age: 24}
//     ]
//   })

//   const onClickHandler = () => {
//     setPersonsState({
//             persons: [
//               {name: "Akhilesh Ojha", age: 25},
//               {name: "Agam Gupta", age: 24},
//               {name: "Shubham Singh", age: 26}
//             ]
//     })
//   }


//   return (
//           <div className="App">
//               <h1 className="App-title">This is my first React Project</h1>
//               <button onClick={onClickHandler}>Switch Names</button>
//               <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>And I am father of Shubham and Agam</Person>
//               <Person name={personsState.persons[1].name} age={personsState.persons[1].age} >He is my youngest son</Person>
//               <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>He is the elder brother of Agam</Person>
//           </div>
//   );


// }

// export default app
