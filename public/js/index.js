const menu = document.getElementById('menu');

Array.from(document.getElementsByClassName('menu-item')).forEach(
  (item, index) => {
    item.onmouseover = () => {
      menu.dataset.activeIndex = index;
    };
  }
);

// const inputText = document.querySelector("#input");
// const button = document.querySelector('button');

// const grossMonthlyIncome = () => {
//    button.innerHTML = inputText.value;

