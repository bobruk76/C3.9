function checToLS(){
  $checList = document.querySelector(input[type="checkbox"])
  console.log(checList);
}

function init() {
  const $city = document.getElementById("city")
  const $btn = document.getElementById("done-btn")

  if(localStorage.getItem('city')) {
    const $doneInput = document.getElementById("done-input");
    let city = localStorage.getItem("city");
    $doneInput.innerHTML = `Ваш город — ${city}`
  }

  $city.addEventListener("input", (e) => {
    localStorage.setItem("city", e.target.value)
  });

   $btn.addEventListener("click", () => {
    checToLS()
  });
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()

  window.addEventListener('storage', function(e) {
    console.log(e.target);
  });
});
