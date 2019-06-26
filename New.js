var http=require('http');   // module
//object----- model
var EmployeeDetail =
{
  [ 
	{ 
	   EmployeeId:101,
	   EmployeeName:"komal",
	   Department:"JAVA",
	   PhoneNumber:123456789
	},
	
	{ 
	   EmployeeId:102,
	   EmployeeName:"Apexa",
	   Department:"WebDesigning",
	   PhoneNumber:567890
	},
	
	{ 
	   EmployeeId:103,
	   EmployeeName:"Riya",
	   Department:"JAVA",
	   PhoneNumber:56767
	}
	
  ]
};




var controller=function(request,response)
{
	response.writeHead(200,
	                {"Content-Type" : "text/plain"});
	                response.end( JSON.stringify(EmployeeDetail));
				    response.end( JSON.stringify(CustomerDetail));
};
var server=http.createServer(controller);
server.listen(7000);
console.log("listening on port 7000");