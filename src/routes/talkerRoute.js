const express = require('express');
const leituraArquivos = require('../utils/leituraArquivos');

const talkerRoute = express.Router();

talkerRoute.get('/', async (_req, res) => {
    const dadosLidos = await leituraArquivos();
    if (dadosLidos.length === 0) {
        return res.status(200).json([]);
    }
    return res.status(200).json(dadosLidos);
  });

  talkerRoute.get('/:id', async (req, res) => {
    const { id } = req.params;
    const dadosLidos = await leituraArquivos();
    const idEncontrado = dadosLidos.find((pessoa) => pessoa.id === Number(id)); // quando não existe, dá undefined
    if (!idEncontrado) {
        return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    }
    return res.status(200).json(idEncontrado);
  });

  module.exports = talkerRoute;