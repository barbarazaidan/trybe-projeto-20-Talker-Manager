const verificaData = require('./verificaData');

const verificaQueryDate = (date, dadosLidos) => {
let palestrantesEncontradosDate = dadosLidos;

    if (date === '') {
        return palestrantesEncontradosDate;
    }

    if (!verificaData(date)) {
        palestrantesEncontradosDate = { 
            message: 'O parâmetro "date" deve ter o formato "dd/mm/aaaa"', 
        };
        return palestrantesEncontradosDate;
    }

    palestrantesEncontradosDate = dadosLidos.filter(
        ({ talk }) => talk.watchedAt === date,
    );
    
    return palestrantesEncontradosDate;
};

module.exports = verificaQueryDate;