const express = require("express");
const app = express();
require("dotenv").config();
const path = require('path');
const mongoose = require("mongoose");
const router = require("./routes");

app.use(express.static('./public'));


app.use("/", router)

app.use("/api", (req, res) => {
    res.send("<h1>this is api</h1>");
})



mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_NAME}.fhokkc8.mongodb.net/?retryWrites=true&w=majority`).then(() => {
        console.log("DB CONNECTION : SUCCESS")
    }, (err) => { console.log("DB CONNECTION : ERROR\nERROR : " + err) })

const port = process.env.PORT || 8000

app.listen(port, () => {
    process.send('ready');
    console.log(`Server Listening on ${port}`);
});