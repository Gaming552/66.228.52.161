const http = require('http');

const server = http.createServer((req,res) => {
    console.log(req,url, req.method, req.headers)
    
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<header><title> My first page</title></header>');
    res.write('<body><h1> Hello to my node.js server </h1></body>');
    res.write('</html>');
    res.end();
    res.write();
});


server.listen(300);
