function horaMiddleware(req, res, next) {
  const fecha = new Date();
  const horas = fecha.getHours();
  const minutos = fecha.getMinutes().toString().padStart(2, '0');

  req.horaActual = `${horas}:${minutos}`;
  req.horaNumerica = horas; // Para validación
  next();
}

module.exports = horaMiddleware;
