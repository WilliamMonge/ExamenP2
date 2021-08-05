const express = require('express');
const app = express()
 
const hbs = require('hbs');
require('./data/productos');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public' ));

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs'); 

app.get('/', (req, res) => {
 res.render('home',{
     nombre:'Pan Dulce',
     nombre2: 'Pan Inegral',
     nombre3: 'Pan Rosca',
     precio: 0.15,
     precio2:0.35,
     precio3: 0.55
 });
});

app.listen(port,()=>{
    console.log(`Escuchando peticiones en el puerto ${port}`);
});