var xhttp = new XMLHttpRequest();
function abc(methodType)
{
	var s = document.getElementById("name");
	
//	var m = document.getElementById("email");
     xhttp.open("GET", "http://localhost:8080/js1/abcde", true);
    xhttp.send();
    alert("hello");
     

}

