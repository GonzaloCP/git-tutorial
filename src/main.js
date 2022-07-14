const express = require('express');

//Iniciación
const app = express();

//Settings
app.set('port', process.env.PORT || 8000);

//Rutas
app.use(require('./routes/index'));

//Arranque servidor
app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto', app.get('port'));
});

