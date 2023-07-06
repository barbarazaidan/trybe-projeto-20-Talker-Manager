const connection = require('./connection');

const getAllDB = async () => {
    const queryBD = 'SELECT * FROM TalkerDB.talkers;'; // não era preciso colocar o TalkerDB, pois fica subtentendido o USE TalkerDB

    // retorna um array com 2 posições, eu só quero a primeira.Então, posso retornar palestrantes[0] ou desestruturar
    // const palestrantes = await connection.execute(queryBD);

    const [palestrantes] = await connection.execute(queryBD);
    return palestrantes;
};

module.exports = getAllDB;