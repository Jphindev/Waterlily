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

// ANIMAL FUNCTION

let startgame = function (animal, safe_animal, animation_property) {
	// a leave off the start redisplay the animal
	start.addEventListener("mouseleave", function () {
		if (safe_animal.style.display === "block") {
			animal.style.display = "none";
		} else {
			animal.style.display = "initial";
		}

		// a hover on waterlily trigger the animation
		waterlily.addEventListener("mouseenter", function () {
			if (gamefield.style.cursor !== "default") {
				animal.style.display = "none";
				waterlily.style.transform = "translateX(670px)";
				waterlily.style.animation = animation_property;
			}

			// a leave off waterlily stop the animation
			waterlily.addEventListener("mouseleave", function () {
				waterlily.style.transform = "translateX(0)";
				waterlily.style.animation = "waterlily_fail 0.5s linear";
				if (safe_animal.style.display === "block") {
					animal.style.display = "none";
				} else {
					animal.style.display = "initial";
				}

				// a hover on the finished saves the animal
				finished.addEventListener("mouseenter", function () {
					if (gamefield.style.cursor !== "default") {
						animal.style.display = "none";
						safe_animal.style.display = "block";
						gamefield.style.cursor = "default";
					}
				});
			});
		});
	});
};

snail.addEventListener("click", function () {
	// the cursor takes the shape of the animal
	gamefield.style.cursor = `url('icons/snail.svg') 25 25, auto`;
	snail.style.display = "none";
	startgame(snail, safe_snail, "niv_snail 5s linear");
});

turtle.addEventListener("click", function () {
	// the cursor takes the shape of the animal
	gamefield.style.cursor = `url('icons/turtle.svg') 25 25, auto`;
	turtle.style.display = "none";
	startgame(turtle, safe_turtle, "niv_turtle 10s linear");
});

frog.addEventListener("click", function () {
	// the cursor takes the shape of the animal
	gamefield.style.cursor = `url('icons/frog.svg') 25 25, auto`;
	frog.style.display = "none";
	startgame(frog, safe_frog, "niv_frog 10s linear");
});

cat.addEventListener("click", function () {
	// the cursor takes the shape of the animal
	gamefield.style.cursor = `url('icons/cat.svg') 25 25, auto`;
	cat.style.display = "none";
	startgame(cat, safe_cat, "niv_cat 10s linear");
});

dog.addEventListener("click", function () {
	// the cursor takes the shape of the animal
	gamefield.style.cursor = `url('icons/dog.svg') 25 25, auto`;
	dog.style.display = "none";
	startgame(dog, safe_dog, "niv_dog 10s linear");
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
