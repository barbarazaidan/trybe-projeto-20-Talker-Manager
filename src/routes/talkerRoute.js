const express = require('express');
const leituraArquivos = require('../utils/leituraArquivos');
const escritaArquivos = require('../utils/escritaArquivos');
const validaNome = require('../validacoes/validaNome');
const validaAge = require('../validacoes/validaAge');
const validaTalk = require('../validacoes/validaTalk');
const validaWatchedAt = require('../validacoes/validaWatchedAt');
const validaRate = require('../validacoes/validaRate');
const validaToken = require('../validacoes/validaToken');
const validaPalestrante = require('../validacoes/validaPalestrante');

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
    const novoPalestrante = { name, age, id, talk };
    dadosLidos.push(novoPalestrante);
    await escritaArquivos(dadosLidos);
    return res.status(201).json(novoPalestrante);
  });

  talkerRoute.put('/:id',
  validaToken, validaNome, validaAge, validaTalk, validaWatchedAt, validaRate, validaPalestrante,
  async (req, res) => {
    const { id } = req.params;
    const { name, age, talk } = req.body;
    const palestranteNovo = { id: +id, name, age, talk }; // o +id é igual a Number(id)
    const dadosLidos = await leituraArquivos();
    const dadosComPalestranteAlterado = dadosLidos.map((palestrante) => {
      if (palestrante.id === Number(id)) {
       return palestranteNovo;
      }
      return palestrante;
    });
    await escritaArquivos(dadosComPalestranteAlterado);
    return res.status(200).json(palestranteNovo);
  });

  talkerRoute.delete('/:id', validaToken, async (req, res) => {
    const { id } = req.params;
    const dadosLidos = await leituraArquivos();
    const dadosComPalestranteDeletado = dadosLidos.filter((palestrante) => palestrante.id !== +id);
    await escritaArquivos(dadosComPalestranteDeletado);
    return res.status(204).json();
  });

  module.exports = talkerRoute;