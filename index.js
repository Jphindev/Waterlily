// VARIABLES
const cat = document.querySelector(".cat");
const turtle = document.querySelector(".turtle");
const snail = document.querySelector(".snail");
const waterlily = document.querySelector(".waterlily");
const gamefield = document.querySelector(".gamefield");
const safeplace = document.querySelector(".safeplace");

snail.addEventListener("click", function () {
	// the cursor takes the shape of the animal
	gamefield.style.cursor = `url('icons/snail.svg') 25 25, auto`;

	// a hover on waterlily trigger the animation
	waterlily.addEventListener("mouseenter", function () {
		waterlily.style.transform = "translateX(650px)";
		waterlily.style.animation = "niv_snail 4s linear";
	});

	// a leave off waterlily stop the animation
	waterlily.addEventListener("mouseleave", function () {
		waterlily.style.transform = "translateX(0)";
		waterlily.style.animation = "none";
	});

	// a click on the safeplace moves the animal
	safeplace.addEventListener("click", function () {
		if (gamefield.style.cursor !== "default") {
			snail.style.transform = "translateX(100px)";
			gamefield.style.cursor = "default";
		}
	});
});

// The cursor doesn't change if it is over the start, waterlilly or end div. But the cursor return to default when it is over none of the above mentionned div.
gamefield.addEventListener("mouseover", function (event) {
	if (
		!event.target.classList.contains("start") &&
		!event.target.classList.contains("waterlily") &&
		!event.target.classList.contains("finished") &&
		!event.target.classList.contains("safeplace") &&
		!event.target.classList.contains("cat") &&
		!event.target.classList.contains("turtle") &&
		!event.target.classList.contains("snail")
	) {
		gamefield.style.cursor = "default";
	}
});
