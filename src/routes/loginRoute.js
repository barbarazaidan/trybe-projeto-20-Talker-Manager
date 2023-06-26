const express = require('express');
// const leituraArquivos = require('../utils/leituraArquivos');
const geraToken = require('../utils/geraToken');
const validaEmail = require('../validacoes/validaEmail');
const validaPassword = require('../validacoes/validaPassword');

const loginRoute = express.Router();

loginRoute.post('/login', validaEmail, validaPassword, async (req, res) => {
    const token = geraToken();
    return res.status(200).json({ token });
});

module.exports = loginRoute;