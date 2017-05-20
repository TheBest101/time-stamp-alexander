const express = require('express');
const moment = require('moment');

var app = express();
app.set('port', (process.env.PORT || 3000))
app.get('/:id',function(req, res){
  var date;
  var num = req.params.id
  console.log(num);
  if(/^\d{8,}$/.test(num)){
    date = moment(num, "X");
  }else{
    date = moment(num, "MMMM D, YYYY");
  }

  if(date.isValid()) {
    res.json({
      unix: date.format("X"),
      natural: date.format("MMMM D, YYYY")
    });
  }else{
    res.json({
      unix: null,
      natural: null
    });
  }
})
app.get("/", function(req,res){
  res.sendFile(path.join(__dirname, 'index.html'))
})
app.listen(app.get('port'), function(){
  console.log("Working");
})
