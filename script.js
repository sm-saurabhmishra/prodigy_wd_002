let time = 0;
let intervalId;

const timeElement = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

startButton.addEventListener("click", () => {
	intervalId = setInterval(() => {
		time++;
		const hrs = Math.floor(time / 3600);
		const mins = Math.floor((time % 3600) / 60);
		const secs = time % 60;
		timeElement.textContent = `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
	}, 1000);
});

stopButton.addEventListener("click", () => {
	clearInterval(intervalId);
});

resetButton.addEventListener("click", () => {
	time = 0;
	timeElement.textContent = "00:00:00";
	clearInterval(intervalId);
});