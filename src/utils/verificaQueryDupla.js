const verificaQueryDate = require('./verificaQueryDate');
const verificaQueryRate = require('./verificaQueryRate');

const queryRateDate = (rate, date, res, dadosLidos) => {
    const retornoQueryRate = verificaQueryRate(rate, dadosLidos);
    const retornoQueryDate = verificaQueryDate(date, dadosLidos);

    if (retornoQueryRate.message) {
        return res.status(400).json(retornoQueryRate);
    }

    if (retornoQueryDate.message) {
        return res.status(400).json(retornoQueryDate);
    }

    const retornoRateDate = retornoQueryRate.filter(({ talk }) => talk.watchedAt === date);
    return res.status(200).json(retornoRateDate);
};

const queryTermDate = (q, date, res, dadosLidos) => {
    const retornoQueryDate = verificaQueryDate(date, dadosLidos);

    if (retornoQueryDate.message) {
        return res.status(400).json(retornoQueryDate);
    }

    const retornoTermDate = retornoQueryDate.filter(
        ({ name }) => name.toLowerCase().includes(q.toLowerCase()),
    );
    return res.status(200).json(retornoTermDate);
};

const queryTermRate = (q, rate, res, dadosLidos) => {
    const retornoQueryRate = verificaQueryRate(rate, dadosLidos);

    if (retornoQueryRate.message) {
        return res.status(400).json(retornoQueryRate);
    }

    const retornoTermRate = retornoQueryRate.filter(
        ({ name }) => name.toLowerCase().includes(q.toLowerCase()),
    );
    return res.status(200).json(retornoTermRate);
};

const verificaQueryDupla = (req, res, dadosLidos) => {
    const { q, rate, date } = req.query;

    if (q === undefined) {
        return queryRateDate(rate, date, res, dadosLidos);
    }

    if (rate === undefined) {
        return queryTermDate(q, date, res, dadosLidos);
    }

    return queryTermRate(q, rate, res, dadosLidos);
};

module.exports = verificaQueryDupla;