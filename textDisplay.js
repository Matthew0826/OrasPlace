const stats = [18471];
function displayTexts() {
    const element = document.getElementById("header1");
    incrementText(element, 0, stats[0]);
    // set the data

}

function incrementText(element, prevVal, tarVal) {
    console.log(prevVal);
    element.textContent = prevVal;
    if (prevVal < tarVal) {
        setTimeout(function () {
            incrementText(element, prevVal + 101, tarVal);

        }, 1);
    } else {
        element.textContent = tarVal;
    }
}
window.onload = displayTexts();

var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValues = [55, 49, 44, 24, 15];
var barColors = [
    "#b91d47",
    "#00aba9",
    "#2b5797",
    "#e8c3b9",
    "#1e7145"
];

new Chart("myChart", {
    type: "pie",
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
            text: "World Wide Wine Production 2018"
        }
    }
});