const express = require('express');
const app = express();
app.get("/",(req,res)=>{
    res.send("Prueba Heroku Carlos Iván Undiano Herrera")
  })

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
  module.exports = app;
