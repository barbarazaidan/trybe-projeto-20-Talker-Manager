const fs = require('fs').promises;
const path = require('path');

const CAMINHO = path.resolve(__dirname, '../talker.json');

const leituraArquivos = async () => {
    const resultado = await fs.readFile(CAMINHO);
    const resultadoJson = JSON.parse(resultado);
    return resultadoJson;
};

module.exports = leituraArquivos;