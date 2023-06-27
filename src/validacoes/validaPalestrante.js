const leituraArquivos = require('../utils/leituraArquivos');

const validaPalestrante = async (req, res, next) => {
    const { id } = req.params;
    const dadosLidos = await leituraArquivos();
    const palestranteEncontrado = dadosLidos.find((palestrante) => palestrante.id === Number(id));
    if (!palestranteEncontrado) {
       return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    }

    next();
};

module.exports = validaPalestrante;