const fs = require('fs');
const path = require('path');


const getFiles = (dir) => {
  let arr = [];

  fs.readdir(dir, (error, files) => {
    files.forEach(file => {
      const name = path.join(dir, file)

      if (fs.statSync(name).isDirectory()) {
        // console.log(file);
        if (file === 'node_modules' || file === '.git' || file === 'coverage') {
          // console.log('aqui estan las dependencias');
        } else {
          getFiles(name);
        }

      } else {
        arr.push(name);
        // if (file.search('.md') >= 0) {
        //   arr.push(file)
        //   leerFile(name);
        //   //console.log(arr)
        // }
      }
    })
    // return arr
    // console.log(arr);

  })
}
getFiles('./')

const md = (name) => {
  let arrMd = [];
  let words = [],
    urls = [],
    arrUrls = [];
  let arr = getFiles(name);
  arr.forEach(file => {
    if (file.search('.md') >= 0) {
      arrMd.push(file)
      fs.readFile(file, 'utf-8', (error, text) => {
        if (error) {
          console.log(error);
        } else {
          text.replace(/\((.+?)\)/g, function ($0, $1) {
            $1.search("http") >= 0 ? urls.push($1) : null
          })
          text.replace(/\[(.+?)\]/g, function ($0, $1) {
            words.push($1)
          })
          arrUrls.push({
            href: url,
            text: words[i],
            file: name
          })
          console.log(arrUrls)
        }

      })
      console.log(arrUrls)

    }
  })

}
// return arrMd



// // console.log(md('./').length)

// const leerFile = (name) => {

//     let words = [],
//       urls = [],
//       arrUrls = [];

//     const text = fs.readFileSync(name).toString();
//     text.replace(/\((.+?)\)/g, function ($0, $1) {
//       $1.search("http") >= 0 ? urls.push($1) : null
//     })
//     text.replace(/\[(.+?)\]/g, function ($0, $1) {
//       words.push($1)
//     })

//     for (let i = 0; i < urls.length; i++) {
//       arrUrls.push({
//         href: urls[i],
//         text: words[i],
//         file: gene
//       })


//     }
//     console.log(arrUrls)
//     // resolve(arrUrls)

//     // console.log(arrUrls)

//     // reject(error)



// }

const validarlink = (file) => {
  let arrl = md(path);
  // console.log(arrl); 
  arrl.forEach(file => {
    fs.readFile(file, 'utf-8', (error, text) => {


    })

  });
}
// console.log(validarlink('./')