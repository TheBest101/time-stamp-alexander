const express = require('express');
const moment = require('moment');

var app = express();

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
  } else {
    res.json({
      unix: null,
      natural: null
    });
}
})
app.listen(3000, function(){
  console.log("Working");
})
