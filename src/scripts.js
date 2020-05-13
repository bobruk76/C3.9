function init() {
  $city = document.getElementById("city")

  $city.addEventListener("input", (event) => {
    localStorage.setItem("city", event.target.value)
  });
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
});
