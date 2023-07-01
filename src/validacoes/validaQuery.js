const leituraArquivos = require('../utils/leituraArquivos');

const verificaRate = (rate, res, dadosLidos) => {
    const rateNumero = +rate;
    const rateEInteiro = Number.isInteger(rateNumero);
    if (!rateEInteiro || rateNumero < 1 || rateNumero > 5) {
        return res.status(400).json(
            { message: 'O campo "rate" deve ser um número inteiro entre 1 e 5' },
        );
    }

    const palestrantesEncontradosRate = dadosLidos.filter(({ talk }) => talk.rate === rateNumero);

    return res.status(200).json(palestrantesEncontradosRate);
};

const verificaSearchTerm = (q, res, dadosLidos) => {
    if (q === undefined || q === '') {
        return res.status(200).json(dadosLidos);
    }

    const palestrantesEncontrados = dadosLidos.filter(
        ({ name }) => name.toLowerCase().includes(q.toLowerCase()),
      );
    
    if (palestrantesEncontrados.length === 0) {
        return res.status(200).json([]);
    }

    return res.status(200).json(palestrantesEncontrados);
};

const validaQuery = async (req, res, next) => {
    const { q, rate } = req.query;
    const dadosLidos = await leituraArquivos();

    if (rate === undefined) {
        return verificaSearchTerm(q, res, dadosLidos);
    }

    if (q === undefined) {
        return verificaRate(rate, res, dadosLidos);
    }
    
    next();
};

module.exports = validaQuery;