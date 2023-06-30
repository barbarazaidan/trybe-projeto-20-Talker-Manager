const leituraArquivos = require('../utils/leituraArquivos');

const validaQuery = async (req, res, next) => {
    const { q } = req.query;
    const dadosLidos = await leituraArquivos();
    const palestrantesEncontrados = dadosLidos.filter(
        ({ name }) => name.toLowerCase().includes(q.toLowerCase()),
    );

    if (q === undefined || q === '') {
        return res.status(200).json(dadosLidos);
    }
    
    if (palestrantesEncontrados.length === 0) {
        return res.status(200).json([]);
    }

    next();
};

module.exports = validaQuery;