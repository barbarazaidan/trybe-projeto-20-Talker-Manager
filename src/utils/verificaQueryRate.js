const validaQueryRate = (rate, dadosLidos) => {
    let palestrantesEncontradosRate;
    
    const rateNumero = +rate;
    const rateEInteiro = Number.isInteger(rateNumero);
    if (!rateEInteiro || rateNumero < 1 || rateNumero > 5) {
        palestrantesEncontradosRate = {
            message: 'O campo "rate" deve ser um número inteiro entre 1 e 5',
        };
        return palestrantesEncontradosRate;
    }

    palestrantesEncontradosRate = dadosLidos.filter(
        ({ talk }) => talk.rate === +rate,
    );

    return palestrantesEncontradosRate;
};

module.exports = validaQueryRate;