const mysql = require('mysql2/promise');

async function execute(sql){
  const conn = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'museu_db',
    port: 3306
  });

  const [ result ] = await conn.query(sql);
  return result;
}

module.exports = {
  execute
}