var express = require('express');
var app = express();

//Reusable controllers
var Controller=function(req, res){
  console.log("Invoking  rest api for product list");
  var Detail = [
  
    {id:1, EmployeeName:"komal",Department:"JAVA",CustomerName:"John",Company:"Amdocs"},
	{id:2, EmployeeName:"Pritesh",Department:"Embeded",CustomerName:"Robert",Company:"L&T"}
  ];
  res.send(Detail);
};

// setting router to map requests  with controllers
app.get ('/Detail',Controller);
var server = app.listen(8086, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://localhost:8086", host, port)
})