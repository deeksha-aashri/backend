
//Http methods and using postman

const express=require('express');
let app=express();
app.use(express.json());//write it to use post method
let user = [
    {
      id: 1,
      name: "Abhishek",
      age: 100,
    },
    {
      id: 2,
      name: "Rajat",
      age: 10,
    },
    {
      id: 3,
      name: "Sunjyot",
      age: 50,
    },
  ];
  //with query
  app.get('/user', (req, res) => {
      res.send(user);
      console.log(req.query);
      let { name, age } = req.query;
      let filteredData=user.filter(userObj => {
          return (userObj.name==name && userObj.age==age)
      })
      res.send(filteredData);
  })


app.get('/user', (req,res)=>{
res.send(user)
})

app.post('/user', (req, res) => {
    console.log(req.body.Name);
    //Putting the data sent via req in db
    user = req.body;
    res.json({
        message: "Data received successfully",
        user: req.body
    });
});

app.patch('/user', (req, res) => {
    console.log(req.body);
    let dataToBeUpdated = req.body;
    for (key in dataToBeUpdated) {
        user[key] = dataToBeUpdated[key];
    }
    res.json({
        message: "data updated succesfully"
    })
});

app.delete('/user', (req, res) => {
    user = {};
    res.json({
        msg: "user has been deleted"
    });
})

//params
app.get('/user/:name', (req, res) => {
    console.log(req.params.name);
    //let {id}=req.params;
    // let user = db.findOne(id);
    res.json({ msg: "user id is ", "obj": req.params });
});

app.listen(5000,()=>{
    console.log("Listening at port 5000")
})

