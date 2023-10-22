const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('<h1>Hello World from Gaurav</h1>')
})

app.get('/about', function (req, res) {
    res.sendFile('./views/about.html',{root:__dirname});
})

app.get('/aboutus', function (req, res) {
    res.redirect('/about');
})

app.use(function (req, res) {
    res.status(404).sendFile('./views/404.html',{root:__dirname});
})

app.listen(3000,()=>{
    console.log("Server is listening on port 3000");
})