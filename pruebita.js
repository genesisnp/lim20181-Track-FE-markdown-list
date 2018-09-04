//OBTENIENDO FILES DE MANERA SINCRONA
const fs = require('fs');
const path = require('path');
// SE REALIZA RECURSIVIDAD. 
const getFiles = (dir, files_) => {
    files_ = files_ || [];
    let arrConcat = ['dihey'];
    let data=[];
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
                    getFiles(name);
                }
            } else {
                
                if (file.search('.md') >= 0) {
                    //arr.push(file)
                    leerFile(name)
                        .then((data) => {
                            console.log(data);
                            arrConcat = arrConcat.push(data);
                            
                        console.log(arrConcat);

                        })
                }
            }

        })
        return arrConcat
    });
    // return files_;
}

console.log(getFiles('./'))

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
        // console.log(arrUrls)
        resolve(arrUrls)

        // console.log(arrUrls)

        reject(error)

    })

}







// FUNCIÓN PARA BUSCAR ARCHIVOS CON EXTENSIÓN MD
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

// // console.log(md('./').length)


const validarlink = (file) => {
    let arrl = md(path);
    // console.log(arrl); 
    arrl.forEach(file => {
        fs.readFile(file, 'utf-8', (error, text) => {


        })

    });
}
// console.log(validarlink('./')