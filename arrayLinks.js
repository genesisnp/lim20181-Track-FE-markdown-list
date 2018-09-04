//OBTENIENDO FILES DE MANERA SINCRONA
const fs = require('fs');
const path = require('path');
// SE REALIZA RECURSIVIDAD. 
const getFiles = (dir, files_) => {
  
  //let data = [];
  // return new Promise( (resolve, reject) =>{ 
    files_ = files_ || [];
    let arrFinalUrls = [];
    let promises =[];
    fs.readdir(dir, (error, files) => {  
      
      files.forEach(file => {
        const name = path.join(dir, file)

        if (fs.statSync(name).isDirectory()) {
          // console.log(file);
          if (file === 'node_modules' || file === '.git') {
            // console.log('aqui estan las dependencias');
          } else {
            getFiles(name);
          }
        } else {
          if (file.search('.md') >= 0) {
            
            var promise = leerFile(name);
            promises.push(promise);
              // .then(data =>{
              //   //arr.push(data);
              //   console.log(data);
              // })
           

          }
        }

      })
      
      // Promise.all(promises).then((data)=>{
      //   console.log(data)
      //   if(data.length != 0 && data[0].length != 0){
      //     data[0].forEach((array,i) =>{
            
            
      //     })
          
      //   }
      // });
     
    
  });
  console.log(promises)
}

getFiles('./');
  // .then( arr => {
  //   console.log(arr)
  // })

const leerFile = (name) => {

  // return new Promise((resolve, reject) => {
    let words = [],
      urls = [],
      arrUrls = [];

    const text = fs.readFileSync(name).toString();
    text.replace(/\((.+?)\)/g, function ($0, $1) {
      $1.search("http") >= 0 ? urls.push($1) : null
    })
    text.replace(/\[(.+?)\]/g, function ($0, $1) {
      words.push($1)
    })

    for (let i = 0; i < urls.length; i++) {
      arrUrls.push({
        href: urls[i],
        text: words[i],
        file: name
      })

    }
    // console.log(arrUrls)
    // resolve($arrFinal)

    // console.log(arrUrls)
    return arrUrls;
    // reject(error)

  // })

}


const validarlink = (leerFile) => {
  let arrl = md(path);
  let contador = 0;
  urls.forEach((url) => {
    if (options.validate) {
      //arrUrls.push();
      request(url, function (error, response) {
        let status = response && response.statusCode;
        if (status >= 400) {
          contador++;
          console.log(contador);
        }
        // console.log(arrl); 
        arrl.forEach(file => {
          fs.readFile(file, 'utf-8', (error, text) => {


          })

        });

      });
    }
  })
}
    
    
// console.log(validarlink('./'))
