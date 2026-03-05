// Esta función es nuestra lógica de negocio pura
const esReservaValida = (roomId) => {
    return typeof roomId === 'number' && roomId > 9999;
};

module.exports = { esReservaValida };