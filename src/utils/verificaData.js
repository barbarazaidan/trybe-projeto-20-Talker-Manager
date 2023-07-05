const verificaData = (watchedAt) => {
    const validaDataRegex = /([0-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/[0-9]{4}/;
    const dataEstaCorreta = validaDataRegex.test(watchedAt);
    return dataEstaCorreta;
};

module.exports = verificaData;