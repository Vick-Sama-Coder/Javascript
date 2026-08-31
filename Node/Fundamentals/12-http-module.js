const http = require('node:http');

const server = http.createServer((req,res)=>{
    if(req.url === '/' ){
        res.end('Home Page')
    }
    if(req.url === '/about'){
        res.end('Here is som info about us')
    }
    res.end('Error 404, Page Not Found')
/*    res.write('Hello World')
    res.end()
*/   
});
server.listen(5000);
