async function generateAdvice() {
	const response = await fetch("https://api.adviceslip.com/advice", {
		mode: "cors",
		method: "GET",
		cache: "no-cache",
	}).then((res) => res.json());
	return response.slip;
}

export { generateAdvice };
