import React, { createContext, useState, useEffect } from 'react'
//import Person from '../models/Person'

// todo: don't retrieve this directly. use repository class instead.
import peopleData from '../data/people.json'

const PeopleContext = createContext({
  people: []
})

// The Provider wrapper instance
const PeopleProvider = ({ children }) => {
  const [people, setPeople] = useState([]);

  // Load people data on load.
  useEffect(() => {
   setPeople(peopleData ?? [])
  }, [])

  useEffect(() => {
    console.debug("peopleContext", people)
  })


  return (
    <PeopleContext.Provider value={{ people }}>
      {children}
    </PeopleContext.Provider>
  )
}

export { PeopleContext, PeopleProvider }
