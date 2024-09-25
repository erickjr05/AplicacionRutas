const express = require('express');
const app = express();

// Importar las rutas
const route1 = require('./routes/route1');
const route2 = require('./routes/route2');

// Usar las rutas
app.use(route1);
app.use(route2);

// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
