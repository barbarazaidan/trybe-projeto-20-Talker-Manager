const mysql = require('mysql2/promise');

// o createPool se torna responsável por gerenciar a abertura e fechamento das conexões.
// const connection = mysql.createPool({
//   // pode ser o nome do container (neste caso, talker_manager_db) ou o nome do serviço
//   host: 'db',
//   port: 3306,
//   user: 'root',
//   password: 'password',
//   database: 'TalkerDB',
// });

const connection = mysql.createPool({
  host: process.env.MYSQL_HOSTNAME,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

module.exports = connection;