// your code here
var form = document.querySelector("form");
var h3 = document.querySelector("h3");
var nameElement = document.querySelector("#name");
var yearElement = document.querySelector("#year");
var btn = document.querySelector("#button");
 function addValue() {
	 var h3Value = h3.innerText;
	 var name = nameElement.value;
	 var year = yearElement.value;
	 if(name && year){
		 h3Value.innerText += "?name" + name + "&year" + year;
	 
	 else if( name && !year)
	 {
		 h3Value.innerText += "?name"+name;
	 }
	 else{
		 h3Value.innerText += "?year" + year;
	 }
 	h3.textContetnt= h3Value;
 }
form.addEventListener("submit", addValue);