const express = require('express');
const app = express();
const indexRouter = require('./routes/index');
const endrouteRouter = require('./routes/endroute');

app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/endroute', endrouteRouter);
app.use('/', indexRouter);

// Puerto
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});
