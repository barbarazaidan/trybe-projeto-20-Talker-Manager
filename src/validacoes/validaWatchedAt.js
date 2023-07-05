const verificaData = require('../utils/verificaData');

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