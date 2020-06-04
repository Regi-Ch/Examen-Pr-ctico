//Importamos las dependencias
const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');

//Creamos una constante para el valor del puerto
const port = process.env.PORT || 3000;

//Emplear las rutas
let pintoresRouter = require('./routes/pintor');

//Sitio web y HBS
const app = express();
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));

//Vamos a decirle a express la ruta que vamos a usar
app.use('/', pintoresRouter);

/*La conexión con MongoDB*/
mongoose.Promise = global.Promise;
const cadena = 'mongodb+srv://Toledo:snowie123@chaveztamayo-9gka0.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(cadena, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log('Conexión establecida :)');
    }).catch(err=> console.log(err));

//Configurar mis rutas
app.get('/leonardo', (req, res)=>{
    res.render('davinci', {
        autor : 'Regina Chávez',
        year : new Date().getFullYear(),
        title : 'Leonardo Da Vinci'
    });
});

app.get('/vincent', (req, res)=>{
    res.render('vangogh', {
        autor : 'Regina Chávez',
        year : new Date().getFullYear(),
        title : 'Vincent van Gogh'
    });
});

app.get('/rafael', (req, res)=>{
    res.render('sanzio', {
        autor : 'Regina Chávez',
        year : new Date().getFullYear(),
        title : 'Rafael Sanzio'
    });
});

app.get('/salvador', (req, res)=>{
    res.render('dali', {
        autor : 'Regina Chávez',
        year : new Date().getFullYear(),
        title : 'Salvador Dalí'
    });
});

/*Arrancar el servidor web*/
app.listen(port, ()=>{
    console.log('Escuchando el puerto...');
});

