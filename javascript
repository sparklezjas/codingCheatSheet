Javascript Cheat Sheet

document.querySelector
var (tag) = document.querySelector(“elementName”); Allows you to change an element
Ex:

Var count = 1;
Var countElement = document.querySelector(“#count”);

console.log(countElement)l

Function add1(1) {
	Count++;
	countElement.innerText = “The count is “ + count;
	console.log(count)l
}

The above, paired with HTML:

	<p id= “count”>The count is 1</p>
	<button onclick=”add1()”>+</button>

Will change the ID to count by 1’s everytime the button is clicked.
__________________________________________________________________

function changeToRed (e){
	e.style.color = “red”
	e.innerText= “Goodbye”

	if(e.innerText == “Hello World”){
		e.innerText = “Goodbye”
} else {
	e.innerText = “Hello World”
	e.style.color = “black”
	Or e.className = “black”
}
}

Function prank(id){
Var prank = document.querySelectior(#prank)
Var prank = document.getElementById(id)
Id.innertext = “It’s just a prank bro”
}
Accompanying HTML
<button onclick=”_prank()”>Press ME</button>

APIs:
var cardsDiv = document.querySelector(“#cards”);
var currentUsername = “ “;

function getUsername(element) {
console.log (element.value);
currentUsername = element.value;
)

function makeCoderCard(data) {
	var res = ‘<div class=”card”>
			<img src=”${data.avatar_url}” alt=”${data.login}”>
			<h3>${data.login} - ${data.name}<h/3>
			<p>Location: ${data.location}</p>
			<p>Repositories: ${data.public_repos)</p>
		</div>’
	return res;
}

async function search() {
	var response = await fetch(“https….” +currentUserName);
	var coderData = await response.json();
	console.log(coderData);
	cardsDiv.innerHTML = makeCoderCard(coderData) + cardsDiv.innerHTML;
}
_______________________________________________________________
MERN
npx create-react-app your-project-name	(this will create a new folder and download React)

git init (initializes repository)

npm start (this will start the React server to give you realtime web preview)

Deletes modules folder
rm -rf node_modules (before zipping)
	npm install (to get it back)

rafce autocomplete in a JSX file
