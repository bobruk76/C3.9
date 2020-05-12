const minValue=0;
const maxValue=59;
let timerId;
const btnFn = (selector, oper, minVal=minValue, maxVal=maxValue) => {
  $obj = $(selector);
  let value = $obj.value()[0];

  if (oper == "+" && value < maxVal) { ++value };
  if (oper == "-" && value > minVal) { --value };
  $obj.value(value);

};

const updateText = (total, selectorMin, selectorSec) =>{
  const countSec = total % 60;
  const countMin = (total - countSec)/60;

  $(selectorMin).value(countMin);
  $(selectorSec).value(countSec);

}

const stopChange = () => {
  $(".btn").addClass("disable-dbutton");
  $("#start-btn").addClass("disable-dbutton");
  $("#minutes").setDisabled();
  $("#seconds").setDisabled();
}

const startChange = () => {
  $(".btn").removeClass("disable-dbutton");
  $("#start-btn").removeClass("disable-dbutton");
  $("#minutes").setDisabled(false);
  $("#seconds").setDisabled(false);
}

const countDown = () => {
  stopChange();
  const countSec = $("#seconds").value()[0];
  const countMin = $("#minutes").value()[0];
  let total = (countSec * 1) + (countMin * 60);

  timerId = setInterval(() => {
    updateText(total--,"#minutes","#seconds");
    if (total < 0) {
      clearInterval(timerId);
      startChange();

      $(".isDone").removeClass("hide");
      setTimeout(() => {$(".isDone").addClass("hide")}, 3000);
    };
  }, 1000);
}

function init() {
  $("#minutes").change( function() {
    if (this.value > maxValue) { this.value = maxValue };
    if (this.value < minValue) { this.value = minValue };
  } ).value(0);

  $("#seconds").change( function() {
    if (this.value > maxValue) { this.value = maxValue };
    if (this.value < minValue) { this.value = minValue };
  } ).value(0);

  $("#btn-min-up").click( function() {
    btnFn("#minutes", "+");
  });

  $("#btn-min-down").click( function() {
    btnFn("#minutes", "-");
  });

  $("#btn-sec-up").click( function() {
    btnFn("#seconds", "+");
  });

  $("#btn-sec-down").click( function() {
    btnFn("#seconds", "-");
  });

  $("#start-btn").click( function() {
    countDown();
  });

  $("#stop-btn").click( function() {
    clearInterval(timerId);
    startChange();
  });
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
});
