var http=require('http');   // module
//object----- model
var EmployeeDetail =
{
   EmployeeId:101,
   EmployeeName:"komal",
   Department:"JAVA",
   PhoneNumber:123456789,
};

var CustomerDetail =
{
   CustomerId:102,
   CustomerName:"John",
   CompanyName:"Amdocs",
   AccountInformation:250000
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