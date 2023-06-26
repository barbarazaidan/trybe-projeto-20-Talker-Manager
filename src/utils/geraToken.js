// função retirada do site https://www.delftstack.com/pt/howto/javascript/javascript-random-string/
// fiz apenas algumas pequenas alterações
// o characters.charAt retorna o caracter indicado em determinado índice
const geraToken = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < 16; i += 1) {
        const indiceRandomico = Math.random() * charactersLength;
        result += characters.charAt(indiceRandomico);
    }
    return result;
};

module.exports = geraToken;