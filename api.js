const express = require("express")
const mongoose = require("mongoose")
const router = express.Router();


const query = "mongodb://localhost:27017";
const db = (query);


mongoose.Promise = global.Promise;

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function(error){
    if(error){
        console.log("Error:", error);
    }
})

module.exports = router;
