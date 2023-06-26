const verificaData = (watchedAt) => {
    const validaDataRegex = /([0-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/[0-9]{4}/;
    const dataEstaCorreta = validaDataRegex.test(watchedAt);
    return dataEstaCorreta;
};

const validaWatchedAt = (req, res, next) => {
    const { talk: { watchedAt } } = req.body;

    if (!watchedAt) {
        return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
    }

    if (!verificaData(watchedAt)) {
        return res.status(400).json(
            { message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' },
        );
    }

    next();
};

module.exports = validaWatchedAt;