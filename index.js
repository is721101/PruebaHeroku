const express = require('express');
const app = express();
app.get("/",(req,res)=>{
    res.send("Prueba Heroku Carlos Iván Undiano Herrera")
  })

  app.listen(3000, () => console.log('Listening on port 3000'));
  module.exports = app;