function myFunction() {
  var x = document.getElementById("nav-links-default");
  if (x.className === "nav-links-default") {
    x.className += " responsive";
  } else {
    x.className = "nav-links-default"
  }
}