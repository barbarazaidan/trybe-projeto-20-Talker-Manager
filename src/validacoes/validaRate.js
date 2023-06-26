const verificaRate = (rate) => {
    const rateNumero = Number(rate);
    const rateEInteiro = Number.isInteger(rateNumero);
    if (!rateEInteiro || rateNumero < 1 || rateNumero > 5) {
        return false;
    } return true;
};

const validaRate = (req, res, next) => {
    const { talk: { rate } } = req.body;

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