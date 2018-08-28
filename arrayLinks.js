//Obteniendo files de manera síncrona
const fs = require('fs');
const path = require('path');

const getFiles = (dir, files_) => {

  files_ = files_ || [];
  let words = [],
    urls = [],
    arrUrls = [];

  fs.readdir(dir, (error, files) => {
    files.forEach(file => {

      const name = path.join(dir, file)
      if (fs.statSync(name).isDirectory()) {
        // console.log(file);

        if (file === 'node_modules' || file === '.git') {
          // console.log('aqui estan las dependencias');

        } else {
          // console.log('aqui NO estan las dependencias');
          // console.log(name);

          getFiles(name, files_);
        }

      } else {
        // console.log(file);
        if (file.search('.md') >= 0) {
          //arr.push(file)
          fs.readFile(name, 'utf-8', (error, text) => {
            if (error) {
              console.log(error);
            } else {
              text.replace(/\((.+?)\)/g, function ($0, $1) {
                $1.search("http") >= 0 ? urls.push($1) : null
              })
              text.replace(/\[(.+?)\]/g, function ($0, $1) {
                words.push($1)
              })
            }

            for (let i = 0; i <= urls.length; i++) {
              arrUrls.push({
                href: urls[i],
                text: words[i],
                file: name
              })

            }
            console.log(arrUrls)

          })

        };
      }

    });

  });

  // return files_;
}

// console.log(getFiles('./').length)

getFiles('./')

// funcion para buscar archivos con extension MD
const md = (path) => {
  let arrMd = [];
  let arr = getFiles(path);
  arr.forEach(file => {
    console.log(file);
    if (file.search('.md') >= 0) {
      // arrMd.push(file)
      //link(file)
      fs.readFile(file, 'utf-8', (error, text) => {
        console.log(file);
        console.log(text);
      })

    }
  })
  return arrMd
}

// console.log(md('./').length)

const link = (file) => {
  // let arrl = md(path);
  // console.log(arrl); 
  // arrl.forEach(file => {

  fs.readFile(file, 'utf-8', (error, text) => {
    console.log(file);
    console.log(text);

  })

}
//link('./')