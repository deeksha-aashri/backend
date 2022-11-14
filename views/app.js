const express=require('express');
const app=express();//server created. No need for http and createserver etc

app.get('/',(req,res)=>{
   res.send("Response received. Here content type is plain text. No need to set status code unless it is a 404 page")
})

// app.get('/', (req,res)=>{
//  res.send(<h1> Home page using content type as html</h1>)
// })
   
//sending file in response
app.get("/about", function (req, res) {
    res.sendFile('/about.html',{root:__dirname});
  });

//redirecting
  app.get('/aboutus', (req, res) => {
    res.redirect('/about')
})

//404 page 
app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});


app.listen(3000,()=>{
console.log("Server is listening at part 3000")
})