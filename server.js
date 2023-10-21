const http=require("http");
const fs= require("fs");

const server=http.createServer((req,res) => {
    console.log("Request from browser to server");
    // console.log(req.method);
    // console.log(req.url);
    res.setHeader('Content-Type','text/html');
    // res.write("<h1>hello world</h1>");
    // res.write("<h3>How are you</h3>")
    // res.end("<h3>Testing response</h3>");

    let path="./views";
    switch(req.url){
        case "/":
            path=path+"/index.html"
            res.statusCode=200;
            break;
        case "/about":
            path=path+"/about.html";
            res.statusCode=200;
            break;
        case "/aboutus":
            res.statusCode=301;
            res.setHeader("Location","/about") 
            res.end();   
        default :
            path=path+"/404.html"; 
            res.statusCode=404;
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

server.listen(3000,"localhost",()=>{
    console.log("server is listening on port 3000");
})