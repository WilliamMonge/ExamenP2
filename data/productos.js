const hbs = require('hbs');

hbs.registerHelper('getnombre',(text)=>{
    let palabras = text.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toUpperCase();

    });
    return palabras.join(' ');
});

hbs.registerHelper('getAnio', ()=>{
    return new Date().getFullYear()
});