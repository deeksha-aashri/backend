//1. import http module
const http = require('http');
const fs=require('fs');
//2. set up server
const server=http.createServer((req,res)=>{
    console.log("A request has been sent from the browser to the server")
    console.log(req)
    console.log(req.method);
    console.log(req.url);

    //to set the response from the server. We set the header. header is a key in both req and res object. we can only set the header of res obj
    
    
                 //ways to set response (i) plain text
    // res.setHeader('Content-Type', 'text/plain');
    // res.write("When response has been set ")
    // res.write("using plain text")
    // //it is vital to end the response
    // res.end();

                 //(ii) html
 res.setHeader('Content-Type', "text/html")
 res.write("<h1> This response came through </h1>")
 res.write("<h2> HTML</h2>")
 res.end();


                //(iii)  webpages
res.setHeader("Content-Type", "text/html");
let path='./views';
switch(req.url){
    case '/':
        path+='/index.html';
        res.statusCode=200;
        break;
    case 'about':
        path += "/about.html";
        res.statusCode = 200;
        break;
    //example of redirecting using the location property of header
    case 'aboutus':
        res.statusCode=301;
        res.setHeader("Location", '/about')    
        res.end();
    default:
            path += "/404.html";
            res.statusCode = 404;
        break;    
}

   fs.readFile(path,(err,file)=>{
    if(err){
        console.log(err);

    }
    else{
        res.write(file);
        res.end();
    }
   })

                })

3.//make the server connection
//port number , hostname, cb
server.listen(3000,'localhost', ()=>{
    console.log("Server is listening on port 3000")
})