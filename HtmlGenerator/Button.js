function button() {
  var btn = document.createElement("BUTTON");
  btn.setAttribute("content", "test");
  btn.setAttribute("class", "btn");
  btn.innerHTML = "TEST";
  document.body.appendChild(btn);
}
