import React, { useState } from 'react';
import axios from 'axios';

const PersonForm = () => {
  const [person, setPerson] = useState({
    PersonID: '',
    FirstName: '',
    LastName: '',
    Email: '',
    PhoneNumber: ''
  });

  const handleChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/persons', person).then((response) => {
      alert('Person added successfully!');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="PersonID"
        placeholder="Person ID"
        value={person.PersonID}
        onChange={handleChange}
      />
      <input
        type="text"
        name="FirstName"
        placeholder="First Name"
        value={person.FirstName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="LastName"
        placeholder="Last Name"
        value={person.LastName}
        onChange={handleChange}
      />
      <input
        type="email"
        name="Email"
        placeholder="Email"
        value={person.Email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="PhoneNumber"
        placeholder="Phone Number"
        value={person.PhoneNumber}
        onChange={handleChange}
      />
      <button type="submit">Add Person</button>
    </form>
  );
};

export default PersonForm;

