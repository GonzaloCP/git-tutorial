const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

//Iniciación
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//Rutas
app.use(require('./routes/index'));

//Public
app.use(express.static(path.join(__dirname, '/public')));


//Arranque servidor
app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto', '127.0.0.1:'+app.get('port'));
});

