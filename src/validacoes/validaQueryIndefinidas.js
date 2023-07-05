const leituraArquivos = require('../utils/leituraArquivos');

const validaQueryIndefinidas = async (req, res, next) => {
    const { q, rate, date } = req.query;
    const chaves = [q, rate, date];
    const dadosLidos = await leituraArquivos();
    const todasQueyIndefinidas = chaves.every((chave) => chave === undefined);

    if (todasQueyIndefinidas) {
        return res.status(200).json(dadosLidos);
    }

    next();
};

module.exports = validaQueryIndefinidas;