const validaEmail = (req, res, next) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ message: 'O campo "email" é obrigatório' });
    }

    const validaEmailRegex = /\S+@+\w+\.+[c]+[o]+[m]/;
    // \S: qualquer caracter que não é espaço em branco; +: adiciona uma nova análise à expressão anterior; \@: add o @; \w: add qualquer caracter de a ate z, de 0 até 9 e também _; \.: add o ponto; [c]+ : add a letra "c" e assim por diante
    
    if (!validaEmailRegex.test(email)) {
        return res.status(400).json(
            { message: 'O "email" deve ter o formato "email@email.com"' },
        );
    }
    // o método test() busca por uma correspondência entre uma expressão regular e uma string, retornando true ou false

    next();
};

module.exports = validaEmail;