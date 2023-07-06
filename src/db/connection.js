const mysql = require('mysql2/promise');

// o createPool se torna responsável por gerenciar a abertura e fechamento das conexões.
const connection = mysql.createPool({
  host: 'db', // pode ser o nome do container (neste caso, talker_manager_db) ou o nome do serviço
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'TalkerDB',
});

module.exports = connection;