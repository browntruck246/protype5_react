const { getConnection } = require('./connection');

async function getAllPersons() {
  const connection = await getConnection();
  const result = await connection.execute('SELECT PersonID, FirstName, LastName, Email, PhoneNumber FROM Person');
  await connection.close();
  return result.rows;
}

async function createPerson(person) {
  const connection = await getConnection();
  const result = await connection.execute(
    `INSERT INTO Person (PersonID, FirstName, LastName, Email, PhoneNumber)
     VALUES (:PersonID, :FirstName, :LastName, :Email, :PhoneNumber)`,
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
