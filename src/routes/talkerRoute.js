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
const validaQueryIndefinidas = require('../validacoes/validaQueryIndefinidas');
const validaQueyDefinidas = require('../validacoes/validaQueyDefinidas');
const verificaQueryDate = require('../utils/verificaQueryDate');
const verificaQueryRate = require('../utils/verificaQueryRate');
const talkerDB = require('../db/talkerDB');

const talkerRoute = express.Router();

talkerRoute.get('/', async (_req, res) => {
    const dadosLidos = await leituraArquivos();
    if (dadosLidos.length === 0) {
        return res.status(200).json([]);
    }
    return res.status(200).json(dadosLidos);
  });

  // a rota search tem que ficar aqui, do contrário, o Thunderclient lê primeiro o /:id 
  talkerRoute.get('/search', 
  validaToken, validaQueryIndefinidas, validaQueyDefinidas,
  async (req, res) => {
    const { q, rate, date } = req.query;
    const dadosLidos = await leituraArquivos();
    const retornoQueryRate = verificaQueryRate(rate, dadosLidos);
    const retornoQueryDate = verificaQueryDate(date, dadosLidos);

    if (retornoQueryRate.message) {
      return res.status(400).json(retornoQueryRate);
  }
    
    if (retornoQueryDate.message) {
      return res.status(400).json(retornoQueryDate);
  }

  const retorno3Query = retornoQueryRate
    .filter(({ talk }) => talk.watchedAt === date)
    .filter(({ name }) => name.toLowerCase().includes(q.toLowerCase()));
    
    return res.status(200).json(retorno3Query);
  });

  // também precisa vir antes do /:id

  talkerRoute.get('/db', async (req, res) => {
    const dadosLidosDB = await talkerDB();

    const palestrantes = dadosLidosDB.map(
      ({ name, age, id, talk_watched_at: watchedAt, talk_rate: rate }) => (
      { name,
        age,
        id,
        talk: {
        watchedAt,
        rate,
      } }
      ),
    );
    return res.status(200).json(palestrantes);
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

  talkerRoute.patch('/rate/:id', validaToken, validaRate, async (req, res) => {
    const { id } = req.params;
    const { rate } = req.body;
    const dadosLidos = await leituraArquivos();

    const dadosComRateAlterado = dadosLidos.map((palestrante) => {
      if (palestrante.id === +id) {
        return {
          ...palestrante,
          talk: { ...palestrante.talk,
            rate,
          },
        };
      }
      return palestrante;
    });
   
    await escritaArquivos(dadosComRateAlterado);
    return res.status(204).json();
  });

  talkerRoute.delete('/:id', validaToken, async (req, res) => {
    const { id } = req.params;
    const dadosLidos = await leituraArquivos();
    const dadosComPalestranteDeletado = dadosLidos.filter((palestrante) => palestrante.id !== +id);
    await escritaArquivos(dadosComPalestranteDeletado);
    return res.status(204).json();
  });

  module.exports = talkerRoute;