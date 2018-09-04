const fs = require('fs');
const path = require('path');

//VERIFICA SI LA RUTA INGRESADA ES ABSOLUTA, SINO CAMBIA EL ESTADO.
const verificarRuta = (pathIngresada) => {
  if (path.isAbsolute(pathIngresada)) {
    return pathIngresada;
  } else {
    let newruta = cambiarAbsoluta(pathIngresada)
    return newruta
  }
}
const cambiarAbsoluta = (pathIngresada) => {
  const rutaCambiada = path.resolve(pathIngresada)
  return rutaCambiada
};

const getFiles = (dir) => {
  let arr = [];
  const listarFile = fs.readdirSync(dir);
  listarFile.forEach(file => {
    const name = path.join(dir, file)

    if (fs.statSync(name).isDirectory()) {
      if (file === 'node_modules' || file === '.git' || file === 'coverage') {
        // console.log('aqui estan las dependencias');
      } else {
        getFiles(name);
      }

    } else {

      if (file.search('.md') >= 0) {
        arr.push(file)
        
      }
    }
  })

  const gene = arr.toString();
  // return gene
  console.log(gene);
}
getFiles('./')
module.exports.verificarRuta = verificarRuta;
module.exports.getFiles = getFiles;
