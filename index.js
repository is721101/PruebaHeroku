const express = require('express');
const app = express();
app.get("/",(req,res)=>{
    res.send("Prueba Heroku Carlos Iván Undiano Herrera")
  })

  var port_number = server.listen(process.env.PORT || 3000);
  app.listen(port_number);
  module.exports = app;