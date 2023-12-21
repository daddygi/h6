const counter = document.getElementById("counter");
const valueSpan = document.getElementById("value");

let counterValue = 0;

const updateCounterUI = () => {
  valueSpan.textContent = counterValue;
};

counter.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const action = event.target.dataset.action;
    counterValue += action === "increment" ? 1 : -1;
    updateCounterUI();
  }
});
