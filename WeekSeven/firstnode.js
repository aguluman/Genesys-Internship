/**
 * Entry file to out application
 */

const http = require('http');
const url = require('url');

const hServer = http.createServer((req, res) => {
    //perform other action here
    const parsedurl = url.parse(req.url, true);
    //console.log(parsedurl);

    const pathname = parsedurl.pathname;
    const trimedPath = pathname.replace(/^\/+|\/+$/g, "");

    const method = req.method;

    const queryStringObj = parsedurl.query;
    const headers = req.headers;
    console.log("headers obj", headers);

    res.setHeader('Content-type', "application/json");
    res.write(JSON.stringify({response : "request got to the server"}));
    res.end();
    console.log(`the url visited was, ${trimedPath} and the method is ${method}`);
});

//start listening on port 5050
hServer.listen(5050, () => {
    console.log("server is listening on port 5050");
})