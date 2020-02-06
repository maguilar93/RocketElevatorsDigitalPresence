const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const port = 3000
var cons = require('consolidate');
var path = require("path");

app.use("/genesis_node", express.static('/index.html'));

// app.get("/", function(req, res){
//     return res.sendFile("./index.html", { root: __dirname });
// })

app.use(express.static(__dirname));

app.listen(port, function(){
    console.log("My server is running on port 3000")
});
