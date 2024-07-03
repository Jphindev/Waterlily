// VARIABLES
const turtle = document.querySelector(".turtle");
const safe_turtle = document.querySelector(".safe_turtle");
const snail = document.querySelector(".snail");
const safe_snail = document.querySelector(".safe_snail");
const frog = document.querySelector(".frog");
const safe_frog = document.querySelector(".safe_frog");
const cat = document.querySelector(".cat");
const safe_cat = document.querySelector(".safe_cat");
const dog = document.querySelector(".dog");
const safe_dog = document.querySelector(".safe_dog");
const pinguin = document.querySelector(".pinguin");
const safe_pinguin = document.querySelector(".safe_pinguin");
const cow = document.querySelector(".cow");
const safe_cow = document.querySelector(".safe_cow");
const start = document.querySelector(".start");
const waterlily = document.querySelector(".waterlily");
const finished = document.querySelector(".finished");
const gamefield = document.querySelector(".gamefield");
const safeplace = document.querySelector(".safeplace");

// GAME WITH SNAIL

if (safe_snail.style.display === "block") {
	snail.style.display = "none";
}

snail.addEventListener("click", function () {
	// the cursor takes the shape of the animal
	gamefield.style.cursor = `url('icons/snail.svg') 25 25, auto`;
	snail.style.display = "none";

	// a leave off the start redisplay the animal
	start.addEventListener("mouseleave", function () {
		if (safe_snail.style.display === "block") {
			snail.style.display = "none";
		} else {
			snail.style.display = "initial";
		}

		// a hover on waterlily trigger the animation
		waterlily.addEventListener("mouseenter", function () {
			if (gamefield.style.cursor !== "default") {
				snail.style.display = "none";
				waterlily.style.transform = "translateX(650px)";
				waterlily.style.animation = "niv_snail 5s linear";
			}

			// a leave off waterlily stop the animation
			waterlily.addEventListener("mouseleave", function () {
				waterlily.style.transform = "translateX(0)";
				waterlily.style.animation = "waterlily_fail 0.5s linear";
				if (safe_snail.style.display === "block") {
					snail.style.display = "none";
				} else {
					snail.style.display = "initial";
				}

				// a hover on the finished saves the animal
				finished.addEventListener("mouseenter", function () {
					if (gamefield.style.cursor !== "default") {
						snail.style.display = "none";
						safe_snail.style.display = "block";
						gamefield.style.cursor = "default";
					}
				});
			});
		});
	});
});

// GAME WITH TURTLE

turtle.addEventListener("click", function () {
	// the cursor takes the shape of the animal
	gamefield.style.cursor = `url('icons/turtle.svg') 25 25, auto`;
	turtle.style.display = "none";

	// a leave off the start redisplay the animal
	start.addEventListener("mouseleave", function () {
		if (safe_turtle.style.display === "block") {
			turtle.style.display = "none";
		} else {
			turtle.style.display = "initial";
		}

		// a hover on waterlily trigger the animation
		waterlily.addEventListener("mouseenter", function () {
			if (gamefield.style.cursor !== "default") {
				turtle.style.display = "none";
				waterlily.style.transform = "translateX(650px)";
				waterlily.style.animation = "niv_turtle 10s linear";
			}

			// a leave off waterlily stop the animation
			waterlily.addEventListener("mouseleave", function () {
				waterlily.style.transform = "translateX(0)";
				waterlily.style.animation = "waterlily_fail 0.5s linear";
				if (safe_turtle.style.display === "block") {
					turtle.style.display = "none";
				} else {
					turtle.style.display = "initial";
				}

				// a hover on the finished saves the animal
				finished.addEventListener("mouseenter", function () {
					if (gamefield.style.cursor !== "default") {
						turtle.style.display = "none";
						safe_turtle.style.display = "block";
						gamefield.style.cursor = "default";
					}
				});
			});
		});
	});
});

// The cursor return to default when it is over the water
gamefield.addEventListener("mouseover", function (event) {
	if (
		!event.target.classList.contains("start") &&
		!event.target.classList.contains("waterlily") &&
		!event.target.classList.contains("finished") &&
		!event.target.classList.contains("safeplace") &&
		!event.target.classList.contains("cat") &&
		!event.target.classList.contains("turtle") &&
		!event.target.classList.contains("snail") &&
		!event.target.classList.contains("frog") &&
		!event.target.classList.contains("dog") &&
		!event.target.classList.contains("pinguin") &&
		!event.target.classList.contains("cow")
	) {
		gamefield.style.cursor = "default";
	}
});
