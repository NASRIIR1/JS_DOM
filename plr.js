
var divroot = document.getElementById("root");

var newUL = document.createElement("ul");
divroot.appendChild(newUL);

var tableau = ["momo","tata","toto","titi","tutu",];

for (var i = 0; i < 5; i++){
	var newLI = document.createElement("li");
	newLI.innerHTML= tableau[i];
	newUL.appendChild(newLI);
}

    var button = document.createElement("input"); 
    button.type = "button"; 
    button.value = "hello"; 
    divroot.appendChild(button);

   // var element = document.getElementById("je m'appel kadar mohamoud");
 
 function kadar ()
 {     
  var prenon=prompt("quel est ton nom§") 
  if (prenon === null || prenon == "")
  	{     alert("error"); }

   else
   	{      alert("bonjour"+ " "+prenon); } 
  } 

button.addEventListener('click', kadar);