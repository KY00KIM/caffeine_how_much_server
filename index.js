const express = require("express");
const app = express();
require("dotenv").config();



app.get("/", (req, res) => {
    res.send("<h1>hi this is caffeine server!</h1>")
})


const port = process.env.PORT || 8000

app.listen(port, () => {
    process.send('ready');
    console.log(`Server Listening on ${port}`);
});