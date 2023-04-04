function init(){
//add your javascrip between these two lines of code
 
    var message = document.getElementById("entryinput");
	var button = document.getElementById("entrybutton");

	button.addEventListener("click", function () {
		alert("Carter Vonk: " + message.value);
		document.getElementById("textoutput").innerHTML = message.value
	});

    }
window.addEventListener('load', init);