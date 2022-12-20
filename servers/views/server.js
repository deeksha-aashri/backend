//Creating a server using node js and http methods


                                     //Step 1   Require http module from node
const http=require('http');
const server= http.createServer((req,res)=>{   //.createserver is a method of http module used to create server
    console.log("A req from browser to server received") //once server has been created and it gets a req the callback is fired
    // console.log("The request object", req)
    console.log(req.method);
    console.log(req.url);

    //1.2  To send response we have numerous ways
    //to set the response from the server. We set the header. header is a key in both req and res object. we can only set the header of res obj
   //ways to set response 
       //(i) plain text
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

})

                                    //Step 2  The server has to be listened to on a port
            //port number, host, callback this will be fired once server is connected
server.listen(3000,'localhost', ()=>{
    console.log("Server is listening at port 3000")
})
