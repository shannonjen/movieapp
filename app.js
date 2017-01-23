var express = require('express');
var app = express();
var pg = require('pg');
// var DB_URL = 'postgres://localhost:5432/movieapp'

app.set('view engine', 'ejs');
app.set('views','./views' )

app.get('/movies', function(req, res){
  // pg.connect(DB_URL, function(err,response,done){
  //   response.query(`select * from movies`, function(err, result){
  //     res.render("index", { movies: result.rows })
  //   })
  // })
  res.send("Hello TTP!")
})

app.listen(port, function(){
  console.log("You are listening on port 3000")
})
