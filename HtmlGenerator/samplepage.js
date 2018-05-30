function Sample() {
var div = document.createElement("div");
var div1 = document.createElement("div");
var div2 = document.createElement("div");
var nav = document.createElement("nav");
var p = document.createElement("p");
var p1 = document.createElement("p");
 var h3 = document.createElement("h3");
 var h31 = document.createElement("h3");
var ul = document.createElement("ul");
var a = document.createElement("a");
var href = document.createElement("href");
var li = document.createElement("li");
var a1 = document.createElement("a");
var li1  = document.createElement("li");
var a2 = document.createElement("a");
var img = document.createElement("img");

var img_div = document.createElement("div");

div.setAttribute("class", "test");
div1.setAttribute("class", "test1");
div2.setAttribute("class", "navbar-header");
nav.setAttribute("class", "navbar navbar-default");
a.setAttribute("class", "navbar-brand");
ul.setAttribute("class", "nav navbar-nav");
li.setAttribute("id", "demo");
li.setAttribute("class", "active");
p.setAttribute("id", "cont");
p1.setAttribute("id", "content");
img_div.setAttribute("class", "container-fluid");


// img.src = "banner.jpg";
// div1.appendChild(img);


h3.innerHTML = "Introduction";
h31.innerHTML = "My projects";
// h3.innerHTML = "Portfolio";
a.innerHTML = "Websitename";
// li.innerHTML = "Page1";
a1.innerHTML = "Page1";
a2.innerHTML = "Page2";
p.innerHTML = "I am Ram, i am a computer science grad.";
p1.innerHTML = "Built Airline system, Bots";
div.appendChild(h3);
div1.appendChild(h31);
nav.appendChild(div2);
div2.appendChild(a);
// nav.appendChild(h3);
ul.appendChild(li);
ul.appendChild(li1);
nav.appendChild(ul);
li.appendChild(a1);
li1.appendChild(a2);
h3.appendChild(p);
h31.appendChild(p1);
img_div.appendChild(img);

img.src = "banner.jpg";


document.body.appendChild(nav);
document.body.appendChild(img_div);
document.body.appendChild(div);
document.body.appendChild(div1);

// document.getElementById("demo").innerHTML = '<font size="6">Page 1</font>';
document.getElementById("cont").contentEditable = "true";

}
