const http = require('http');
var cowsay = require("cowsay");


const server = http.createServer((req, res) => {
   res.end('Hello World');
});

server.listen(3000, () => {
    console.log(cowsay.say({
        text : "Hello World",
        e : "oO",
        T : "U "
    }));
});