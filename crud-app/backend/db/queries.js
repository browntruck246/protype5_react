const { getConnection } = require('./connection');

async function getAllPersons() {
  const connection = await getConnection();
  const result = await connection.execute('SELECT * FROM Person');
  await connection.close();
  return result.rows;
}

async function createPerson(person) {
  const connection = await getConnection();
  const result = await connection.execute(
    `INSERT INTO Person (PersonID, FirstName, LastName, BirthDate, Email, PhoneNumber)
     VALUES (:PersonID, :FirstName, :LastName, :BirthDate, :Email, :PhoneNumber)`,
    person
  );
  await connection.commit();
  await connection.close();
  return result;
}

module.exports = {
  getAllPersons,
  createPerson
};
