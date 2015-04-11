function MenuChoice()
{
    if (document.getElementById("menu").value == "Show Area 1")
    {
        document.getElementById("section1").style.visibility = "visible";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "hidden";
    }
    else if (document.getElementById("menu").value == "Show Area 2")
    {
        document.getElementById("section2").style.visibility = "visible";
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "hidden";
    }
    else if (document.getElementById("menu").value == "Show Area 3")
    {
        document.getElementById("section3").style.visibility = "visible";
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "hidden";
    }
    else
    {
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "hidden";
    }
}


function CreateCustomer()
{
    
var objRequest = new XMLHttpRequest();

var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/CreateCustomer";

//Collect Customer data from web page
var customerid = document.getElementById("custid").value;

var customername = document.getElementById("custname").value;

var customercity = document.getElementById("custcity").value;

//Create the parameter string
var newcustomer = '{"CustomerID":"' + customerid + '","CompanyName":"' + customername +'","City":"' + customercity +'"}';


//Checking for AJAx operation return
objRequest.onreadystatechange = function()
{
    
if (objRequest.readyState == 4 && objRequest.status == 200)
{
    
var result = JSON.parse(objRequest.responseText);
OperationResult(result);
}
}

//Start AJAX request
objRequest.open("POST", url, true);

objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

objRequest.send(newcustomer);
}


function OperationResult(output)
{
    
if (output.WasSuccessful == 1)
{
    
document.getElementById("result").innerHTML = "The operation was successful!"
}

else
{
    
document.getElementById("result").innerHTML = "The operation was not successful!" + "<br>" + output.Exception;
}
}


function UpdateOrderAddress()
{
    
var objRequest = new XMLHttpRequest();

var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/updateOrderAddress";

//Collect Customer data from web page
var ordernumber = document.getElementById("ordernumber").value;

var shipname = document.getElementById("shipname").value;

var shipaddress = document.getElementById("shipaddress").value;

var shipcity = document.getElementById("shipcity").value;

var shippostal = document.getElementById("shippostal").value;

//Create the parameter string
var updateorderaddress = '{"OrderID":"' + ordernumber + '","ShipName":"' + shipname +'","ShipAddress":"' + shipaddress +'","ShipCity":"' + shipcity +'","ShipPostCode":"' + shippostal +'"}';


//Checking for AJAx operation return
objRequest.onreadystatechange = function()
{
    
if (objRequest.readyState == 4 && objRequest.status == 200)
{
    
var result = JSON.parse(objRequest.responseText);
ShipResult(result);
}
}

//Start AJAX request
objRequest.open("POST", url, true);

objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

objRequest.send(updateorderaddress);
}


function ShipResult(output)
{
    
if (output.WasSuccessful == 1)
{
    
document.getElementById("result2").innerHTML = "The operation was successful!"
}

else
{
    
document.getElementById("result2").innerHTML = "The operation was not successful!" + "<br>" + output.Exception;
}

/*else if (output.WasSuccessful == -2)
{
    
document.getElementById("result2").innerHTML = "The operation failed because the data string supplied could not be deserialized into the service object." + "<br>" + output.Exception;
}

else if (output.WasSuccessful == -3)
{
    
document.getElementById("result2").innerHTML = "The operation failed because a record with the supplied Order ID could not be found." + "<br>" + output.Exception;
}
*/
}


function DeleteCustomer()
{
var objRequest = new XMLHttpRequest(); //Create AJAX request object

//Create URL and Query string
var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/deleteCustomer/";
url += document.getElementById("custiddelete").value;

//Checks that the object has returned data
objRequest.onreadystatechange = function()
{
    
if (objRequest.readyState == 4 && objRequest.status == 200)
{
    
var output = JSON.parse(objRequest.responseText);
GenerateOutput(output);
}
}

//Initiate the server request
objRequest.open("GET", url, true);
objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
objRequest.send();

}
function GenerateOutput(result)
{
if (result.DeleteCustomerResult.WasSuccessful == 1)
{
    
document.getElementById("result3").innerHTML = "The operation was successful!"
}

else
{
    
document.getElementById("result3").innerHTML = "The operation was not successful!" + "<br>" + result.Exception;
}
}