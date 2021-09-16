process.title = 'basicServer';
var agrs = process.argv, 
port = agrs[2] || 3000, 
server = require('./server');

server.listen(port)