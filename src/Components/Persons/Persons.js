import React from 'react'
import Person from './Person/Person'
import '../Persons/Persons.css'

const persons = (props) => props.persons.map((person , index) => {
            return (
            <div className="person">
                <Person click={() => props.clicked(index)} 
                name={person.name} 
                age={person.age} 
                key={person.id}
                changed={ (event) => props.changed(event, person.id)}>    
                </Person>
           </div>
           )
        });

export default persons;