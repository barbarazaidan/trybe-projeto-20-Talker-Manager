const express = require('express');
// const leituraArquivos = require('../utils/leituraArquivos');
const geraToken = require('../utils/geraToken');

const loginRoute = express.Router();

loginRoute.post('/login', async (req, res) => {
    // const { email, password } = req.body;
    const token = geraToken();
    return res.status(200).json({ token });
});

module.exports = loginRoute;