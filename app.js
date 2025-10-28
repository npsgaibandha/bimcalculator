const height = document.getElementById("height");
const weight = document.getElementById("weigth");
const score = document.getElementById("score");
const form = document.getElementById("form");
const button = document.getElementById("button");
const result = document.querySelector(".result");
const resultInfo = document.getElementById('resultInfo')

button.addEventListener("click", function () {
	let NumHeight = parseFloat(height.value) ;
	let NumWeight = parseFloat(weight.value);
	
	let heightMeter = NumHeight / 100;
	let bmi = NumWeight / (heightMeter * heightMeter);
	
	result.style.display = "block";
	score.textContent = bmi.toFixed(2);
	if (bmi < 18.6) {
		score.style.backgroundColor = "#e3f179";
        resultInfo.innerHTML = 'You weight is so low! Go to eat now🍗🍙🥣'
	} else if (bmi > 24.9) {
		score.style.backgroundColor = "#e43636";
        resultInfo.innerHTML = 'You weight is so much! Go for exercise now🚲⚡'
	} else {
		score.style.backgroundColor = "#32d637";
        resultInfo.innerHTML = 'Perfect height and weight 💪'
	}
});

form.addEventListener("submit", (e) => {
	e.preventDefault();
});
