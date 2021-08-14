const billInput = document.getElementById("bill");
const peopleInput = document.getElementById("people");
const customInput = document.getElementById("customTip");
const tipValue = document.getElementById("tip_value");
const totalValue = document.getElementById("total_value");
const resetBtn = document.getElementById("resetBtn");
const errors = document.querySelectorAll("#error");

function tipsCalc(per) {
  if (billInput.value == 0) {
    billInput.classList.add("input_error");
    for (let i = 0; i < errors.length; i++) {
      error[0].innerHTML = "Cannot be zero";
    }
  } else if (peopleInput.value == 0) {
    billInput.classList.remove("input_error");
    peopleInput.classList.add("input_error");
    error[0].innerHTML = "";
    error[1].innerHTML = "Cannot be zero";
  } else {
    peopleInput.classList.remove("input_error");
    errors.forEach((error) => (error.innerHTML = ""));
    let tipAmt = (billInput.value * per) / 100 / peopleInput.value;
    let totalAmt = billInput.value / peopleInput.value + tipAmt;
    tipValue.innerHTML = tipAmt.toFixed(2);
    totalValue.innerHTML = totalAmt.toFixed(2);
  }
}

resetBtn.addEventListener("click", resetFun);

function resetFun() {
  billInput.value = null;
  peopleInput.value = null;
  tipValue.innerHTML = "0.00";
  totalValue.innerHTML = "0.00";
  errors.forEach((error) => (error.innerHTML = ""));
  billInput.classList.remove("input_error");
  peopleInput.classList.remove("input_error");
}

function customTips() {
  if (billInput.value == 0) {
    billInput.classList.add("input_error");
    for (let i = 0; i < errors.length; i++) {
      error[0].innerHTML = "Cannot be zero";
    }
  } else if (peopleInput.value == 0) {
    billInput.classList.remove("input_error");
    peopleInput.classList.add("input_error");
    error[0].innerHTML = "";
    error[1].innerHTML = "Cannot be zero";
  } else {
    peopleInput.classList.remove("input_error");
    let tipAmt =
      (billInput.value * customInput.value) / 100 / peopleInput.value;
    let totalAmt = billInput.value / peopleInput.value + tipAmt;
    tipValue.innerHTML = tipAmt.toFixed(2);
    totalValue.innerHTML = totalAmt.toFixed(2);
  }
}
