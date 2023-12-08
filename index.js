// alert("Hello World");
// document.querySelector("h1").innerHTML="Good bye"
// document.firstElementChild;=html
// document.firstElementChild.firstElementChild;=head
// document.firstElementChild.lastElementChild;=body
//var heading=document.firstElementChild.lastElementChild.firstElementChild;=<h1>Hello</h1>
//heading.innerHTML='Good bye'; <h1>Good bye</h1>
//heading.style.color='red';
//document.querySelector("input").click();

//document.lastElementChild.querySelector("ul").lastElementChild.innerHTML="I Got It";
// document.getElementsByTagName("li")[2].style.color="green"; 
// document.getElementsByClassName("btn")[0].style.color="green";
// document.getElementById("list");
//const heading1=document.getElementById("title");
//heading1.innerHTML="good bye";
document.querySelector("h1");
document.querySelector("#title");
document.querySelector(".btn");
document.querySelector("li a");//selecting specifically
document.querySelector("a");
document.querySelector("li.item")//returns the first list with class item
document.querySelector("#list a");
document.querySelector("#list .item");
document.querySelectorAll("#list .item");
document.querySelectorAll("#list .item")[1];//selects the second element

document.querySelector("#list .item").style.color='red';//style the bullet point only
document.querySelector("#list .item a").style.color='red';//style the anchor tag
document.querySelector("h1").style.color='green';
//document.querySelector("h1").style.fontSize='5rem';
document.querySelector(".btn").style.backgroundColor='yellow';

//Separation of Concerns -- Structure(HTML)-- Style(CSS)-- Behaviour(Js)
document.querySelector("button").classList.add("invisible");
document.querySelector("button").classList.remove("invisible");
document.querySelector("button").classList.toggle("invisible");//ons & off the class
//document.querySelector("h1").classList.add("huge");

document.querySelector("h1").innerHTML;//<strong>Hello</strong>
document.querySelector("h1").textContent;//Hello
document.querySelector("h1").innerHTML="<strong><em>Good bye</em></strong>";

document.querySelector("a").attributes;
document.querySelector("a").getAttribute("href");
document.querySelector("a").setAttribute("href","https://www.bing.com");
document.querySelector("a").href="https://www.google.com";