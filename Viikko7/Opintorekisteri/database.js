const mysql = require('mysql2');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'admin',
  password: 'justse',
  database: 'tjr_viikko4'
});
module.exports = connection;