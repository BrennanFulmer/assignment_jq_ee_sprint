
var theForm = document.getElementById("myForm");

theForm.addEventListener("input", function(action) {
  action.target.classList.remove("invalid");
  document.getElementById(action.target.getAttribute("fault")).classList.remove("error");
  document.getElementById(action.target.getAttribute("fault")).innerHTML = "characters left: " + ((action.target.getAttribute("maxy")) - (action.target.value.length));
  if (action.target.getAttribute("twin") !== null) {
    if (action.target.value === document.getElementsByClassName(action.target.getAttribute("twin"))[0].value) {
      
    }
  }
});

theForm.addEventListener("submit", function(pressed) {
  pressed.preventDefault();
});
