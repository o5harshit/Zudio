const express = require("express");
const app = express() // server of express created
const path = require("path");
const mongoose = require("mongoose");
const user = require("./model/user.js");
const ejsMate = require("ejs-mate");

const port = 8000;
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.static(path.join(__dirname,"/images")));
app.use(express.urlencoded({extended:true}));
app.engine("ejs",ejsMate);


main()
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Users");
}

app.listen(port,()=>{
    console.log("Connection Created");
})

app.get("/home",(req,res)=>{
    res.render("index.ejs");
})

app.get("/home/introduction",(req,res)=>{
    res.render("intro.ejs");
})

app.post("/important",async(req,res)=>{
    const  data  = new user(req.body.user);
  // await data.save();
   console.log(data);
    res.render("imp.ejs");
})

app.get("/syallbus",async(req,res)=> {
  res.render("syallbus.ejs");
})

// app.get("/syallbus/pdf",async(req,res)=> {
//   res.render("pdf.ejs");
// })