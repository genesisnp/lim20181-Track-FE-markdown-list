const fs = require('fs');
const path = require('path');

const getFiles = (dir) => {
  let arr = [];
  const listarFile = fs.readdirSync(dir);
  listarFile.forEach(file => {
    const name = path.join(dir, file)

    if (fs.statSync(name).isDirectory()) {
      if (file === 'node_modules' || file === '.git' || file === 'coverage') {
        console.log('aqui estan las dependencias');
      } else {
        getFiles(name);
      }

    } else {

      if (file.search('.md') >= 0) {
        arr.push(file)

      }
      // console.log(arr);
    }
  })

  const gene = arr.toString();
  // return gene
  console.log(gene);
}
(getFiles('./'))

const leerFile = (name) => {

  return new Promise((resolve, reject) => {
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
    console.log(arrUrls)
    resolve(arrUrls)

    // console.log(arrUrls)

    reject(error)

  })

}