const oracledb = require('oracledb');
// hr schema password
var password = 'root' 
// checkConnection asycn function
async function checkConnection() {
  try {
    connection = await oracledb.getConnection({
        user: "system",
        password: password,
        connectString: "localhost:1521/xe"
    });

    result = await connection.execute(`SELECT * FROM "SYSTEM"."PERSON"`);

    for (let i = 0; i < result.rows.length; i++) {
      console.log(result.rows[i]);
    }

    console.log('connected to database');
  } catch (err) {
    console.error(err.message);
  } finally {
    if (connection) {
      try {
        // Always close connections
        await connection.close(); 
        console.log('close connection success');
      } catch (err) {
        console.error(err.message);
      }
    }
  }
}

checkConnection();