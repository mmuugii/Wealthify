const { Chart } = require("chart.js");



const menu = document.getElementById('menu');
const button = document.getElementById('btn1');


function getInputValue() {
  var inputVal = document.getElementById("myInput").value;
  console.log(inputVal);
  var liabilities = (inputVal/ 50)*100;
var expenses = (inputVal/30)*100;
var investments = (inputVal/20) * 100;

// Chart.js doughnut chart which should animate on page load with a spiral animation and be composed of Liabilities, Expenses and Investments.
var xValues = ["Liabilities", "Expenses", "Investments",];
var yValues = [2365, 1419, 946];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Wealthify Budget Breakdown"
    }
  }
});

}

// Then execute the liability variable, expenses variable, and income variable using the input value from the button click event.



// Once each variable is executed, the values need to be pushed into an array to be fed into Chart.js as data.


// const data = [liabilities, expenses, investments];



Array.from(document.getElementsByClassName('menu-item')).forEach(
  (item, index) => {
    item.onmouseover = () => {
      menu.dataset.activeIndex = index;
    };
  }
);

function validateinput()
{
    var inputbox = document.getElementById("myInput");
    
    if(isNaN(parseFloat(inputbox.value)))
    {
        inputbox.className = "red";
    }
    else
    {
        inputbox.className = "green";
    }
}

