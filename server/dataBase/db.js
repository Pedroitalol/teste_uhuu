
const mysql = require('mysql2');

// create the connection to database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'teste_uhuu',
  password: 'ongsys'
});

export default db;