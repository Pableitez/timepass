function validarHora(req, res, next) {
  const hora = req.horaNumerica;

  if (hora >= 12 && hora <= 23) {
    next();
  } else {
    res.locals.mensaje = "Aún no son las 12 de la mañana. Inténtalo más tarde.";
    return res.redirect('/?mensaje=' + encodeURIComponent(res.locals.mensaje));
  }
}

module.exports = validarHora;
