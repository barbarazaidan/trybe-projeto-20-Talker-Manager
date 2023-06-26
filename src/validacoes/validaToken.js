const verificaToken = (authorization) => {
    if (typeof authorization === 'string' && authorization.length === 16) {
        return true;
    } return false;
};

const validaToken = (req, res, next) => {
    const { authorization } = req.headers;
    
    if (!authorization) {
        return res.status(401).json({ message: 'Token não encontrado' });
    }

    if (!verificaToken(authorization)) {
        return res.status(401).json(
            { message: 'Token inválido' },
        );
    }

    next();
};

module.exports = validaToken;