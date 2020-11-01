const express = require("express");
const app = express();
var serveStatic = require('serve-static')

const PORT = process.env.PORT || 4000;

app.use(serveStatic(__dirname + "/dist"))

app.get(/.*/, (req,res) => {
  res.sendFile(`${__dirname}/dist/index.html`)
})

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
  });