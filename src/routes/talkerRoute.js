const express = require('express');
const leituraArquivos = require('../utils/leituraArquivos');
const escritaArquivos = require('../utils/escritaArquivos');
const validaNome = require('../validacoes/validaNome');
const validaAge = require('../validacoes/validaAge');
const validaTalk = require('../validacoes/validaTalk');
const validaWatchedAt = require('../validacoes/validaWatchedAt');
const validaRate = require('../validacoes/validaRate');
const validaToken = require('../validacoes/validaToken');

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

  talkerRoute.post('/', 
  validaToken, validaNome, validaAge, validaTalk, validaWatchedAt, validaRate,
  async (req, res) => {
    const { name, age, talk } = req.body;
    const dadosLidos = await leituraArquivos();
    const id = dadosLidos.length + 1;
    const novoUsuario = { name, age, id, talk };
    dadosLidos.push(novoUsuario);
    await escritaArquivos(dadosLidos);
    return res.status(201).json(novoUsuario);
  });

  module.exports = talkerRoute;