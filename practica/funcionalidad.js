const mdLinks = (path = "./", options = { validate: false, stats: false }) => {
  const fs = require('fs');
  var request = require('request');

  const arr = [];


  fs.readdir(path, (error, files) => {
    files.forEach(file => {
      if (file.search('.md') >= 0) {
        arr.push(file)
        fs.readFile(file, 'utf-8', (error, text) => {
        
          if (error) {
            console.log(error);
          } else {
            let words = [],
              urls = [],
              arrUrls = [];

            text.replace(/\((.+?)\)/g, function ($0, $1) {
              $1.search("http") >= 0 ? urls.push($1) : null
            })
            text.replace(/\[(.+?)\]/g, function ($0, $1) {
              words.push($1)
            })
            // newArrayUrl = [...new Set(urls)];//url que no se repiten
            // console.log(urls.length);
            // console.log(newArrayUrl.length);
            // console.log(newArrayUrl);
            let contador = 0;
            urls.forEach((url) => {
              if (options.validate) {
                arrUrls.push();
                request(url, function (error, response) {
                  let status = response && response.statusCode;
                  if (status >= 400) {
                    contador++;
                    console.log(contador);
                  }
                  console.log(status);
                  arrUrls.push({
                    href: url,
                    status
                  })

                });
                // console.log("hola options.validate true")
              } else {
                arrUrls.push({
                  href: url,
                  text: words[i],
                })
              }
              console.log(arrUrls)
            })
            console.log(arrUrls)

          }

        })


      };
    });

  });
}

mdLinks('./', { validate: true, stats: false });

