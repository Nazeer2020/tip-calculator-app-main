"use strict"
const btn = document.querySelectorAll(".btn");
const reset = document.querySelector(".reset");
const customise_input = document.querySelector(".customise");
const numberOfPerson = document.querySelector(".person");
const tipAmount = document.querySelector(".tip_amount");
const totalTip = document.querySelector(".total_tip");



let value;

btn.forEach(element => {
  element.addEventListener('click', event => {
    let target = event.target;
    if (target.matches('button')) {
      // let value = target.innerHTML
      // value = 5;
      console.log(Number(value));
      if (target.innerHTML === "5%") {
        value = 5;
      } else if (target.innerHTML === "10%") {
        value = 10;
      } else if (target.innerHTML === "25%") {
        value = 25;
      } else if (target.innerHTML === "50%") {
        value = 50;
      }
    }
  })

})


document.querySelector(".customise").addEventListener('input', () => {
  let target = document.querySelector(".customise").value;
  value = Number(target)
})




function tipCalculator(value) {
  const percentageTip = (Number(document.querySelector(".bill").value) * value) / 100;
  return percentageTip;
}


function TotalTipCalculator() {
  var outCome = tipCalculator(value);
  const outCome01 = Number(numberOfPerson.value) * outCome;
  console.log(outCome01);
  totalTip.innerHTML = `${outCome01}`
  tipAmount.innerHTML = `${outCome}`;
}

numberOfPerson.addEventListener("input", TotalTipCalculator)

reset.addEventListener('click', () => {
  location.reload();
})
