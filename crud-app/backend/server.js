const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const { initialize, close } = require('./db/connection');
const { getAllPersons, createPerson } = require('./db/queries');

const app = express();
//app.use(bodyParser.json());

app.use(cors({
  origin: 'http://localhost:3000'
}));

//http://localhost:3001/persons
app.get('/persons', async (req, res) => {
  const persons = await getAllPersons();
  res.json(persons);
});

app.post('/persons', async (req, res) => {
  const newPerson = req.body;
  await createPerson(newPerson);
  res.status(201).json(newPerson);
});

initialize()
  .then(() => app.listen(3001, () => console.log('Server running on port 3001')))
  .catch((err) => console.error('Error initializing database pool', err));

process.on('SIGINT', () => {
  close().then(() => console.log('Database pool closed'));
});

