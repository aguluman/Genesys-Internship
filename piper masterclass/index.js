//primary file for api

//Dependencies
const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;

//the server should respond to all request with a string
const server = http.createServer(function(req,res){

    //Get the URL and parse it
    const parsedUrl = url.parse(req.url, true);

    //Get the path
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');

    //Get the query string as an object
    const queryStringObject = parsedUrl.query;

    //Get the HTTP Method
    const method = req.method.toLowerCase();

    //Get the Headers of an object
    const headers = req.headers;

    //Get the payload, if any
    const decoder = new StringDecoder('utf-8');
    var buffer = '';
    req.on('data', function(data){
        buffer += decoder.write(data);
    });
    req.on('end', function(){
        buffer += decoder.end();

        //choose the handler this request should go to. If one is not found, use the not found handler
     var chosenHandler = typeof(router[trimmedPath]) !== 'undefined' ? router[trimmedPath] : handlers.notFound;

    //Construct the data object to send to the handler
    var data = {
        'trimmedPath' : trimmedPath,
        'queryStringObject' : queryStringObject,
        'method' : method,
        'headers' : headers,
        'payload' : buffer
    };

    //Route the request to the handler specified in the router
    chosenHandler(data,function(statusCode, payload){
       //use the status code called back by the handler, or default to 200
          statusCode = typeof(statusCode) =='number' ?  statusCode : 200;

       //use the payload called back by the handler, or default to an empty object
        payload = typeof(payload) == 'object' ? payload : {};

        //Convert the pay;oad to a string
        var payloadString = JSON.stringify(payload);

        //Return the response
        res.writeHead(statusCode);
       res.end(payloadString);

       //console the request path
       console.log('Returning this response: ',statusCode,payloadString);
    });


    //Log the request path
    //console.log('Request received on path: '+trimmedPath+ ' ,with method: '+ method+ ',and with these query string parameters ',queryStringObject);
    //console.log('Request received with these headers: ', headers);  
    //console.log('Request received with this payload: ', buffer);    
    
    });  
});



    //start the server, and have it listen on port 2400
    server.listen(2400, function(){
        console.log("The server is listening on port 2400 now");
     });
     
    // Define the handlers
     var handlers = {};

     // Sample handler
     handlers.sample = function(data, callback){
        //callback a http status code, and a payload object
        callback(406, {'name' : 'sample handler'});
     };

     //Not found handlers
     handlers.notFound = function(data,callback){
        callback(404);
     };
    //Defining a request router
     var router ={
         'sample' : handlers.sample
     }