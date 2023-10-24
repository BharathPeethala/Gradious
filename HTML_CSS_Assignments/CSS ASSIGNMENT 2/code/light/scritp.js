function toggleTheme() {
	var theme = document.getElementsByTagName("link")[0];
	if (theme.getAttribute("href") == "./style/light.css") {
		theme.setAttribute("href", "./style/dark.css");
	} else {
		theme.setAttribute("href", "./style/light.css");
	}

	var vector = document.getElementById("vector");
	var splitVector = vector.src.split("/");
	vector.src =
		splitVector.pop() === "light.svg"
			? "./assets/dark.svg"
			: "./assets/light.svg";
}
