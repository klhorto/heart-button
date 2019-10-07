let button = document.getElementById("addbutton");
button.addEventListener("click", function() {
  let love = document.getElementById("love");
  let clone = love.firstElementChild.cloneNode(true);
  love.appendChild(clone);
});