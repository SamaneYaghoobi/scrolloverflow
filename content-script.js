const acceptedAnswer = document.querySelector(".accepted-answer");
const header = document.getElementsByTagName("header")[0];

if (acceptedAnswer) {
	header.style.backgroundColor = "#d8f3dc";
	acceptedAnswer.scrollIntoView({ behavior: "smooth" });
} else {
	header.style.backgroundColor = "#fbf8cc";
}
