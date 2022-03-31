import { generateAdvice } from "./generateAdvice.js";

const id = document.querySelector("#id");
const advice = document.querySelector("#advice");
const dice = document.querySelector(".button");

dice.addEventListener("click", async function () {
	let slip = await generateAdvice();
	id.innerText = slip.id;
	advice.innerText = slip.advice;
});


