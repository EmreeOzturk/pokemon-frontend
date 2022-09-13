// requires
const express = require("express");
const path = require("path");

// configuration
require("dotenv").config();

// variables
const app = express();
const port = process.env.PORT;
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))

app.get("/",(req,res)=> {
    res.sendFile(path.join(__dirname,"/views/index.html"))
})

// listen port
app.listen(port, () => {
  console.log("App is running on " + port);
});
