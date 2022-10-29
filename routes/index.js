const router = require("express").Router();
const path = require("path");


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
})


router.use("/api", (req, res) => {
    res.send("<h1>this is api page</h1>");
})


module.exports = router