// exports.printMsg = function(){
//     console.log('ENTRASTE A MI NPM MARKDOWN-LINKS');

// }

const path = require('path');
const nose = require ('./cli.js')


const mdLinks = (path, options) => {
  console.log(path,options)
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        console.log("Async work is complete ");
        resolve( arrayLinks(path)); // Resolving
      }, 1000);

    } catch (error) {
      console.error(error);
      reject('no se que paso pero paso');
    }

  })
}
module.exports.mdLinks = mdLinks;

// mdLinks()

// mdLinks()
//   .then(data => {
//     console.log(data)
//   })
//   .catch(err => {
//     console.log(err)
//   })



  const arrayLinks =(path)=>{
    return ([{name:'lulu'},{name:'teresa'},{name:'heidy'}]);
  }