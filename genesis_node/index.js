const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const port = 3000

// middleware / routing
// app.set("view engine", "")
app.use(express.static("public"));

app.get("/submit-form", function(req, res){
    return res.render("/submit-form");
})

app.listen(port, function(){
    console.log("My server is running on port 3000")
});
