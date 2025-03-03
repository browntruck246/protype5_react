import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PersonList = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    axios.get('/persons').then((response) => {
      setPersons(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Person List</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.PersonID}>
            {person.FirstName} {person.LastName} - {person.Email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonList;
