const fs = require('fs').promises;
const path = require('path');

const CAMINHO = path.join(__dirname, '../talker.json');

const escritaArquivos = async (dadosParaInserir) => {
    // o primeiro parâmetro é obrigatório, o null pode ser alterado caso eu queira substituir algum dado da informação passada e o 2 tem a ver com a formatação do JSON, para ficar bonitinho
    const dadoEmString = JSON.stringify(dadosParaInserir, null, 2);
    await fs.writeFile(CAMINHO, dadoEmString);
};

module.exports = escritaArquivos;