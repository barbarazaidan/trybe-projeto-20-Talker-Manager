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

  module.exports = talkerRoute;