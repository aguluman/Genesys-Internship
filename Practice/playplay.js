// node.js crash course by traversy
//creating a server object

// const http = require('http');

// http.createServer((req, res) => {
//     //write response                     it works
//     res.write('Hello World');
//     res.end()
// }). listen(5000, () => console.log('server running...'));

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        fs.readFile(path.join(__dirname, 'public', 'index.html'),  
        (err, content) => {
                if(err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content);
        });       
    }
    //console.log(req.url);
    if(req.url === '/api/users'){
            const users = [
                {name: 'Bob Smith', age: 40 },
                {name: 'John Doe', age: 30 }
            ]; 
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(users));

        // fs.readFile(path.join(__dirname, 'public', 'about.html'),  
        // (err, content) => {
        //         if(err) throw err;
        //     res.writeHead(200, {'Content-Type': 'text/html'});
        //     res.end(content);
        //});       
    }
});



const PORT = process.env.PORT || 5005;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

