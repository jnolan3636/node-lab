

const quotes = require('./quotes');


const http = require("http");
const port = 3000;
http.createServer((req, res) => {
    const index = Math.floor(Math.random() * quotes.length);
    
    const randomQuote= quotes[index];
    res.writeHead(200, {"Content-type": "text/html"});
    res.write(randomQuote);
    res.end();
}).listen(port);

console.log("Listening on port http://localhost:" + port)

