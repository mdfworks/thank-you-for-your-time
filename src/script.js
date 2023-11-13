import './style.css';

const time = document.querySelector(".hours");
const secHand = document.querySelector(".second");
const minHand = document.querySelector(".minute");
const hourHand = document.querySelector(".hour");

function startClock() {
	const now = new Date();
	const seconds = now.getSeconds();
	const minutes = now.getMinutes();
	const hours = now.getHours();

	let secDeg = seconds * (360 / 60) + minutes * 360;
  let minDeg = minutes * (360 / 60) + seconds / 12;
	let hourDeg = hours * (360 / 12) + (minutes / 12) * (360 / 60);
	secHand.style.transform = `translateX(-50%) rotate(${secDeg}deg)`;
	minHand.style.transform = `translateX(-50%) rotate(${minDeg}deg)`;
	hourHand.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
}
setInterval(startClock, 1000);
startClock();