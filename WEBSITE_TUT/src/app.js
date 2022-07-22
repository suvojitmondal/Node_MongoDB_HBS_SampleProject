const express = require("express");
const hbs = require("hbs");
const app = express();
const routes = require('./routes/main.js');
const mongoose = require("mongoose");
//const Details = require("./models/Details.js");

app.use(express.static("public"));

app.use('', routes);

app.set('view engine', 'hbs');
app.set("views", "views");
hbs.registerPartials("views/partials");
//db connection
mongoose.connect("mongodb://localhost/website_tut", ()=>{
    console.log("db connected");  
    // Details.create({
    //     brandName: "CFP Technical",
    //     brandIconUrl: "google.com",
    //     links:[
    //         {
    //             label: "Home",
    //             url:"/"
    //         },
    //         {
    //             label: "Services",
    //             url:"/services"
    //         },
    //         {
    //             label: "Gallery",
    //             url:"/gallery"
    //         },
    //         {
    //             label: "About",
    //             url:"/about"
    //         },
    //         {
    //             label: "Contact Us",
    //             url:"/contact-us"
    //         }
    //     ]
    // });
});

app.listen(process.env.POST | 5001, ()=>{
    console.log("server started");
});