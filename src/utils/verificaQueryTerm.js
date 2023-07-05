const validaQueryTerm = (q, dadosLidos) => {
    let palestrantesEncontrados = dadosLidos;

    if (q === '') {
        return palestrantesEncontrados;
    }

    palestrantesEncontrados = dadosLidos.filter(
        ({ name }) => name.toLowerCase().includes(q.toLowerCase()),
      );

    return palestrantesEncontrados;
};

module.exports = validaQueryTerm;