const fs = require('fs').promises;
const path = require('path');

const CAMINHO = path.join(__dirname, '../talker.json');

const leituraArquivos = async () => {
    const resultado = await fs.readFile(CAMINHO); // posso usar também (CAMINHO, 'utf-8')
    const resultadoJson = JSON.parse(resultado);
    return resultadoJson;
};

module.exports = leituraArquivos;