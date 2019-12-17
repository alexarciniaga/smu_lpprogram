var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    var icon = this;
    if (content.style.display === "block") {
      content.style.display = "none";
      icon.classList.toggle("minusicon");
      icon.classList.toggle("plusicon");
    } else {
      content.style.display = "block";
      icon.classList.toggle("minusicon");
      icon.classList.toggle("plusicon");
    }
  });
}