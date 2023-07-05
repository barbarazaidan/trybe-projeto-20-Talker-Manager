const leituraArquivos = require('../utils/leituraArquivos');
const verificaQueryDupla = require('../utils/verificaQueryDupla');
const verificaQueryUnica = require('../utils/verificaQueryUnica');

const validaQueyDefinidas = async (req, res, next) => {
    const { q, rate, date } = req.query;
    const chaves = [q, rate, date];
    const dadosLidos = await leituraArquivos();
    const chavesDefinidas = chaves.filter((chave) => chave !== undefined); 

    if (chavesDefinidas.length === 1) {
        return verificaQueryUnica(req, res, dadosLidos);
    }

    if (chavesDefinidas.length === 2) {
        return verificaQueryDupla(req, res, dadosLidos);
    }

    next();
};

module.exports = validaQueyDefinidas;