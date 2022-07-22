const { Router } = require("express");
const express = require("express");
const {route} = require('express/lib/application');
const routes = express.Router();
const Details = require('../models/Details.js');

routes.get("/", async (req, res)=>{
    const details  = await Details.findOne({"_id" :"62ce6c42ae6c1efcb5c2c9e9"});
    console.log(details);
    res.render("index", {
        details:detail
    });

});

routes.get("/gallery", async (req, res)=>{
    const details  = await Details.findOne({"_id" :"62ce6c42ae6c1efcb5c2c9e9"});
    res.render("gallery",{
        details:detail
    });
})

module.exports = routes