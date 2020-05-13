const $checkList = document.querySelectorAll('input[type=checkbox]')

function checToLS(){
  $checkList.forEach(element => {
    localStorage.setItem(element.value,element.checked);
    element.setAttribute("readonly","readonly");

  });
}

function clearLS(){
  $checkList.forEach(element => {
    localStorage.clear();
    document.location.reload(true);
  });
}

function init() {
  const $city = document.getElementById("city")
  const $btn = document.getElementById("done-btn")
  const $clearBtn = document.getElementById("clear-btn")

  function setSity(cityStr){
    const $doneInput = document.getElementById("done-input");
    $doneInput.innerHTML = `Ваш город — ${cityStr}`
    $city.classList.add("hide")
  }

  for(let i=0; i<localStorage.length; i++) {
    let key = localStorage.key(i);
    if (key == "city"){
      setSity(localStorage.getItem(key))
    }else{
      let $check = document.getElementsByName(key)[0]
      $check.checked = (localStorage[key] == 'true');
      $check.setAttribute("readonly","readonly");
    }
    }

    $city.addEventListener("input", (e) => {
      localStorage.setItem("city", e.target.value);
    });

    $city.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        setSity(localStorage.getItem("city"))
      }
    });

    $btn.addEventListener("click", () => {
      checToLS()
    });

    $clearBtn.addEventListener("click", () => {
     clearLS()
    });
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()

  window.addEventListener('storage', function(e) {
    console.log(e.target);
  });
});
