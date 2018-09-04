#!/usr/bin/env node
const [, , ...args] = process.argv
const rutaJsCambio = require('./ruta.js');
const mdLinks = require('./index.js');

const options = {
    validate: false,
    stats: false
}

if (args[0]) {

    let path = rutaJsCambio.verificarRuta(args[0]);
// usar forEach
    for (let i = 1; i < args.length; i++) {

        if (args[i] == "--stats") {
            options.stats = true;
        } else if (args[i] == "--validate") {
            options.validate = true
            console.log('mostrar todos los links');
            ;
        } else {

        }
    }

    mdLinks(path, options)
    // console.log(promesa
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        });


} else {
    console.log('no hay ruta');
}




