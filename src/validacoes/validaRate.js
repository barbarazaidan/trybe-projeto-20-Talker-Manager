const verificaRate = (rate) => {
    const rateNumero = Number(rate);
    const rateEInteiro = Number.isInteger(rateNumero);
    if (!rateEInteiro || rateNumero < 1 || rateNumero > 5) {
        return false;
    } return true;
};

const verificaRateParams = (req) => {
    const chaves = Object.keys(req.body);
    if (chaves.includes('talk')) {
        const { talk: { rate } } = req.body;
        return rate;
    }
    const { rate } = req.body;
    return rate;
};

const validaRate = (req, res, next) => {
    const rate = verificaRateParams(req);

    // !rate - pega tanto quando o rate vem indefinido quanto quando ele vem igual a zero

    if (rate === undefined) {
        return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
    }

    if (!verificaRate(rate)) {
        return res.status(400).json(
            { message: 'O campo "rate" deve ser um número inteiro entre 1 e 5' },
        );
    }

    next();
};

module.exports = validaRate;