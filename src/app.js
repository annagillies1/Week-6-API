const express = require ("express");
const app = express ();

// adding things to webserver 

//app.use("/myHTML", express.static("public"))

app.get("/application", (req, res) => {
    const hello = "Hello World!"
    response.send(hello)
})

module.exports = app;