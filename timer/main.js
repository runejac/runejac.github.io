const timer = document.querySelector("#stopwatch");

let sec = 0;
let min = 0;
let hour = 0;
let ms = 0;
let stopTime = true;

const startTimerBtn = document.querySelector("#start-timer");
const stopTimerBtn = document.querySelector("#stop-timer");
const resetTimerBtn = document.querySelector("#reset-timer");



startTimerBtn.addEventListener("click", function () {

	if (stopTime === true) {
		stopTime = false;
		timerCycle();
		startTimerBtn.style.display = "none";
	}

})

stopTimerBtn.addEventListener("click", function () {

	if (stopTime === false) {
		stopTime = true;
		startTimerBtn.style.display = "";
	}

})


resetTimerBtn.addEventListener("click", function () {
	timer.innerHTML =   "00<span style=\"color: darkcyan\">:</span>" +
						"<span style='font-size: 100px;'>00</span>" +
						"<span style=\"color: darkcyan\">:</span>" +
						"<span style='font-size: 100px;'>00</span>" +
						"<span style=\"color: darkcyan\">:" +
						"</span>00";
	stopTime = true;
	hour = 0;
	ms = 0;
	sec = 0;
	min = 0;
	startTimerBtn.style.display = "";
})


function timerCycle() {
	if (stopTime === false) {
		ms = parseInt(ms);
		sec = parseInt(sec);
		min = parseInt(min);
		hour = parseInt(hour);

		ms++;

		if (ms === 100) {
			sec++;
			ms = 0;
		}

		if (sec === 60) {
			min++;
			sec = 0;
		}

		if (min === 60) {
			hour++;
			min = 0;
			sec = 0;
		}



		if (ms < 10 || ms === 0) {
			ms = "0" + ms;
		}
		if (sec < 10 || sec === 0) {
			sec = "0" + sec;
		}
		if (min < 10 || min === 0) {
			min = "0" + min
		}
		if (hour < 10 || hour === 0) {
			hour = "0" + hour;
		}


		timer.innerHTML =   `
								${hour}<span style=\"color: darkcyan\">:</span><span style=\"font-size: 100px\">${min}</span><span style=\"color: darkcyan\">:</span><span style=\"font-size: 100px\">${sec}</span><span style=\"color: darkcyan\">:</span>${ms}
							`;

		setTimeout(timerCycle, 10);

	}


}
