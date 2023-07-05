const verificaQueryDate = require('./verificaQueryDate');
const verificaQueryRate = require('./verificaQueryRate');
const verificaQueryTerm = require('./verificaQueryTerm');

const queryTerm = (q, res, dadosLidos) => {
    const retornoQueryTerm = verificaQueryTerm(q, dadosLidos);
    return res.status(200).json(retornoQueryTerm);
};

const queryRate = (rate, res, dadosLidos) => {
    const retornoQueryRate = verificaQueryRate(rate, dadosLidos);
    if (retornoQueryRate.message) {
        return res.status(400).json(retornoQueryRate);
    }
   
    return res.status(200).json(retornoQueryRate);
};

const queryDate = (date, res, dadosLidos) => {
    const retornoQueryDate = verificaQueryDate(date, dadosLidos);
    if (retornoQueryDate.message) {
        return res.status(400).json(retornoQueryDate);
    }
   
    return res.status(200).json(retornoQueryDate);
};

const verificaQueryUnica = (req, res, dadosLidos) => {
    const { q, rate, date } = req.query;

    if (q !== undefined) {
        return queryTerm(q, res, dadosLidos);
    }

    if (rate !== undefined) {
        return queryRate(rate, res, dadosLidos);
    }

    return queryDate(date, res, dadosLidos);
};

module.exports = verificaQueryUnica;