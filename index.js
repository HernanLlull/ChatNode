const express = require('express');

const app = express();


//Settings
app.set('port',process.env.PORT || 3000);
app.set('views',__dirname+'/src/views');
app.engine('html',require('ejs').renderFile);
app.set('view engine','ejs');

//Rutas
const routes = require('./src/routes/routes');
app.use(routes);


//Crea el servidor y dejarlo escuchando en un puerto
app.listen(app.get('port'),()=>{
    console.log('Servidor escuchando en el puerto: ' + app.get('port'));
});