const timer = document.querySelector("#stopwatch");

let sec = 0;
let min = 0;
let hour = 0;
let ms = 0;
let stopTime = true;


const startTimerBtn = document.querySelector("#start-timer");
const stopTimerBtn = document.querySelector("#stop-timer");
const resetTimerBtn = document.querySelector("#reset-timer");

// variable that prevent phone to go into idle mode
let wakeLock = null;
navigator.wakeLock = undefined;

// START function
startTimerBtn.addEventListener("click", async function () {

	try {
		wakeLock = await navigator.wakeLock.request('screen');
		if (stopTime === true) {
			stopTime = false;
			timerCycle();
			startTimerBtn.style.display = "none";
		}
	} catch (err) {
		// The Wake Lock request has failed - usually system related, such as battery.
		startTimerBtn.textContent = `${err.name}, ${err.message}`;
	}

})

// STOP function
stopTimerBtn.addEventListener("click", function () {

	if (stopTime === false) {
		stopTime = true;
		startTimerBtn.style.display = "";
	}

	// makes the phone go into idle if stop is clicked
	wakeLock.release()
		.then(() => {
			wakeLock = null;
		});

})

// RESET function
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

	// makes the phone go into idle if reset is clicked
	wakeLock.release()
		.then(() => {
			wakeLock = null;
		});

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
