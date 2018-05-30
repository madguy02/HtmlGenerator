function Sample() {
var div = document.createElement("div");
var div1 = document.createElement("div");
var nav = document.createElement("nav");
var p = document.createElement("p");
var p1 = document.createElement("p");
var h3 = document.createElement("h3");

div.setAttribute("class", "test");
div1.setAttribute("class", "test1");
nav.setAttribute("class", "navbar-default");

p.innerHTML = "Introduction";
p1.innerHTML = "My projects";
h3.innerHTML = "Portfolio";

div.appendChild(p);
div1.appendChild(p1);
nav.appendChild(h3);

document.body.appendChild(nav);
document.body.appendChild(div);
document.body.appendChild(div1);

}
