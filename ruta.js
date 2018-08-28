const path = require('path');

const verificarRuta = (pathIngresada) => {

    if(path.isAbsolute(pathIngresada)){
      return pathIngresada;
    }else{
      let newruta = cambiarAbsoluta(pathIngresada)
      return newruta      
    }
}

const cambiarAbsoluta = (pathIngresada) =>{
  const rutaCambiada = path.resolve(pathIngresada)
  return rutaCambiada
}

module.exports.verificarRuta = verificarRuta;