const oracledb = require('oracledb');

const dbConfig = {
  user: 'system',
  password: 'root',
  connectString: 'localhost:1521/xe'
};

async function initialize() {
  await oracledb.createPool(dbConfig);
}

async function close() {
  await oracledb.getPool().close();
}

async function getConnection() {
  return await oracledb.getConnection();
}

module.exports = {
  initialize,
  close,
  getConnection
};
