// VARIABLES
const cat = document.querySelector(".cat");
const safe_cat = document.querySelector(".safe_cat");
const turtle = document.querySelector(".turtle");
const safe_turtle = document.querySelector(".safe_turtle");
const snail = document.querySelector(".snail");
const safe_snail = document.querySelector(".safe_snail");
const start = document.querySelector(".start");
const waterlily = document.querySelector(".waterlily");
const finished = document.querySelector(".finished");
const gamefield = document.querySelector(".gamefield");
const safeplace = document.querySelector(".safeplace");

snail.addEventListener("click", function () {
	// the cursor takes the shape of the animal
	gamefield.style.cursor = `url('icons/snail.svg') 25 25, auto`;
	snail.style.display = "none";

	// a leave off the start redisplay the snail
	start.addEventListener("mouseleave", function () {
		if (safe_snail.style.display === "block") {
			snail.style.display = "none";
		} else {
			snail.style.display = "initial";
		}

		// a hover on waterlily trigger the animation
		waterlily.addEventListener("mouseenter", function () {
			snail.style.display = "none";
			waterlily.style.transform = "translateX(650px)";
			waterlily.style.animation = "niv_snail 4s linear";

			// a leave off waterlily stop the animation
			waterlily.addEventListener("mouseleave", function () {
				waterlily.style.transform = "translateX(0)";
				waterlily.style.animation = "waterlily_fail 0.5s linear";
				if (safe_snail.style.display === "block") {
					snail.style.display = "none";
				} else {
					snail.style.display = "initial";
				}

				// a hover on the finished hide the animal
				finished.addEventListener("mouseenter", function () {
					snail.style.display = "none";
				});

				// a click on the safeplace saves the animal
				safeplace.addEventListener("click", function () {
					if (gamefield.style.cursor !== "default") {
						safe_snail.style.display = "block";
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
		!event.target.classList.contains("snail")
	) {
		gamefield.style.cursor = "default";
	}
});
