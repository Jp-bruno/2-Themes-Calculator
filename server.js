var http = require('http')
var config = require('./config'),
fileHandler = require('./fileHandler'),
types = config.types,
rootFolder = config.rootFolder,
defaultIndex = config.defaultIndex

var server = http.createServer(requestHandler)

module.exports = server;


function requestHandler(req, res) {
    var filename = new URL(req.url, 'http://localhost:3000/').pathname, //aqui é declarado o caminho requisitado pelo cliente
    fullPath,
    extension;
    
    if (filename === '/') { //se o caminho requisitado estiver vazio, substitua-o por index.html, que é o default Index
        filename = defaultIndex
    }

    fullPath = rootFolder + filename;

    extension = filename.substr(filename.lastIndexOf('.') + 1) //a extensao do arquivo requerido, ex: jpeg, html, js

    fileHandler(fullPath, (data) => {
        res.writeHead(200, {
            'Content-Type': types[extension] || 'text/plain',
            'Content-Length': data.length
        });

        res.end(data)
    }, (err) => {
        res.writeHead(404);
        res.end()
    })
}