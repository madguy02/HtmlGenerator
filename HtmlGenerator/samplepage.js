function Sample() {
var div = document.createElement("div");
var div1 = document.createElement("div");
var p = document.createElement("p");
var p1 = document.createElement("p");
div.setAttribute("class", "test");
div1.setAttribute("class", "test1");
p.innerHTML = "Introduction";
p1.innerHTML = "My projects";
div.appendChild(p);
div1.appendChild(p1);
document.body.appendChild(div);
document.body.appendChild(div1);

}
