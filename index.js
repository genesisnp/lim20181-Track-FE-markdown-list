const path = require('path');
const cli = require('./cli.js')
var request = require('request');


const mdLinks = (path, options) => {
  // console.log(path, options)
  if (options.validate == false && options.stats == false) {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          resolve(getFiles(path));
        }, 1000);

      } catch (error) {
        console.error(error);
        reject('no se que paso pero paso');
      }

    })
  } else if (options.validate == true && options.stats == true) {

    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          console.log('genesis');
          resolve(validarlink(path));
        }, 3000);

      } catch (error) {
        console.error(error);
        reject('no se que paso pero paso');
      }

    })

  } else if (options.validate == true && options.stats == false) {
     
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          resolve(validarlink(path));
          
        }, 1000);

      } catch (error) {
        console.error(error);
        reject('no se que paso pero paso');
      }

    })

  } else if (options.validate == false && options.stats == true) {

    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          console.log('genesis');
          resolve(validarlink(path,"s"));
        }, 1000);

      } catch (error) {
        console.error(error);
        reject('no se que paso pero paso');
      }

    })
  }
}
module.exports = mdLinks;

// mdLinks()

// mdLinks()
//   .then(data => {
//     console.log(data)
//   })
//   .catch(err => {
//     console.log(err)
//   })



const getFiles = (path) => {
  return ([
    {
      href: 'https://atom.io/',
      text: 'Atom REPETIDO',
      file: 'practica\\prueba.md'
    },
    {
      href: 'https://nodejs.org/',
      text: 'Node.js REPETIDO',
      file: 'practica\\prueba.md'
    },
    {
      href: 'https://github.com/MichelleSV',
      text: 'no funciona error ',
      file: 'practica\\prueba.md'
    }]);
}

const validarlink = (path ,op) => {
  
  let arrStats = [];
  let arrayLinks = getFiles(path)
  // console.log(arrayLinks);
  
  let contador = 0;

  let tam = arrayLinks.length;

  arrayLinks.forEach((objlink) => {
    //arrUrls.push();
    const url = objlink.href
    request(url, function (error, response) {
      let status = response && response.statusCode;
      
      if (status <= 400) {
         contador ++;

        arrStats.push(path + "  " +  url  +  " OK " + status )

      }else {
        arrStats.push(path + "  " +  url  +  " fail " + status )

      }
      // console.log(arrStats);
      return arrStats
    });
  
  })

  if(op === "v"){
    return ["mayu"]
  }else if (op === "s"){
    return ({ Total : tam  , Unique :3})
  }else if(op==="sv"){
    return ({ Total : tam  , Unique :3 , broken : contador})
  }


}