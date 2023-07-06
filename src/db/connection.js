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

// precisa usar essas variáveis de ambiente para rodar no avaliador do git, do contrário a conexão com o banco dá erro. Mais sobre o assunto: https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/live-lectures/1ad46538-81ac-40b9-8a16-1fa50743c6cf/recording/c5db6c4b-86c6-49d5-8876-15f48a6cdd3a

const connection = mysql.createPool({
  host: process.env.MYSQL_HOSTNAME,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

module.exports = connection;