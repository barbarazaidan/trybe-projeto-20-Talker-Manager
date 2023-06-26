const validaAge = (req, res, next) => {
    const { age } = req.body; // vem como string

    if (!age) {
        return res.status(400).json({ message: 'O campo "age" é obrigatório' });
    }

    if (!Number.isInteger(Number(age)) || Number(age) < 18) {
        return res.status(400).json(
            { message: 'O campo "age" deve ser um número inteiro igual ou maior que 18' },
        );
    }

    next();
};

module.exports = validaAge;