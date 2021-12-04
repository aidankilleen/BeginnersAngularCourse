const express = require("express");
const app = express();
const port = 3000;

console.log("Node.js Express Test");

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.send("<h1>Hello World</h1>");
});

app.listen(port, function() {
    console.log(`Web server listening on port ${port}`);
});








