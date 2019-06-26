var express = require('express');
var app = express();

var employeeController=function (req, res) {
  console.log("CAlling rest api");
  var employee=[
            {firstName:'Pravin',lastName:'Patil',age:43},
            {firstName:'Akshay',lastName:'jadhav',age:43},
            {firstName:'Rohit',lastName:'Sharma',age:28},
            {firstName:'Prathamesh',lastName:'Shelke',age:25},
            {firstName:'Mohsin',lastName:'Sayyad',age:23}
      ];
  res.send(employee);
};

var officeController=function (req, res) {
    console.log("CAlling rest api");
    var office=[
              {location:'Pune'},
              {location:'kolhapur'},
              {location:'Delhi'},
              {location:'mumbai'},
              {location:'chennai'}
        ];
    res.send(office);
  };
  

  var productController=function (req, res) {
    console.log("CAlling rest api");
    var product=[
              {product_name:'bat', material:'wood'},
              {product_name:'ball', material:'leather'},
              {product_name:'gloves',material:'rubber'},
              {product_name:'clothes',material:'cotton'}
              
        ];
    res.send(product);
  };
  

app.get('/employee',employeeController );
app.get('/office',officeController );
app.get('/product',productController );

var server = app.listen(8088, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://localhost:8088", host, port)
})