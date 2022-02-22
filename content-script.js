(function () {
	const acceptedAnswer = document.querySelector(".accepted-answer");
	const header = document.getElementsByTagName("header")[0];
	const body = document.getElementsByTagName("body")[0];
	const currentTheme = body.classList.contains("theme-dark") ? "dark" : "light";
	const backgroundColor = {
		dark: {
			success: "#3c5d4e",
			fail: "#5d573c",
		},
		light: {
			success: "#d8f3dc",
			fail: "#fdf7e2",
		},
	};

	if (acceptedAnswer) {
		header.style.backgroundColor = backgroundColor[currentTheme].success;
		acceptedAnswer.scrollIntoView({ behavior: "smooth" });
	} else {
		header.style.backgroundColor = backgroundColor[currentTheme].fail;
	}
})();
