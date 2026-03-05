// Esta función es nuestra lógica de negocio pura
const esReservaValida = (roomId) => {
    return typeof roomId === 'number' && roomId > -1;
};

module.exports = { esReservaValida };