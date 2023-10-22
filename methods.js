const express=require("express");
const app=express();
app.use(express.json());

let user={};

app.get('/user',(req,res)=>{
    console.log(user);
    res.send(user);
})

app.post('/user',(req,res)=>{
    console.log(req.body);
    user=req.body;
    // console.log(users);
    res.json({
        message:"data received successfully",
        users:req.body
    })
})

app.patch('/user',(req,res)=>{
    console.log(req.body);
    // console.log(users);
    let dataToBeUpdated=req.body;
    for(key in dataToBeUpdated){
        users[key]=dataToBeUpdated[key];
    }
    res.json({
        message:"data updated successfully"
    })
});

app.delete('/user',(req,res)=>{
    user={};
    res.json({
        message:"message deleted"
    })
})

app.listen(5000,()=>{
    console.log("server is listening on port 5000");
});