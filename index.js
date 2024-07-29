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
const animals = [snail, turtle, frog, cat, dog, pinguin, cow];
const safe_animals = [
	safe_snail,
	safe_turtle,
	safe_frog,
	safe_cat,
	safe_dog,
	safe_pinguin,
	safe_cow,
];

// ANIMAL FUNCTION

let startgame = function (animal, safe_animal, animation_property) {
	// a hover on waterlily trigger the animation
	waterlily.addEventListener(
		"mouseenter",
		function () {
			if (gamefield.style.cursor !== "default") {
				animal.style.display = "none";
				waterlily.style.transform = "translateX(670px)";
				waterlily.style.animation = animation_property;

				// a leave off waterlily stop the animation
				waterlily.addEventListener(
					"mouseleave",
					function () {
						waterlily.style.transform = "translateX(0)";
						waterlily.style.animation = "waterlily_fail 0.5s linear";

						// a hover on the finished saves the animal
						finished.addEventListener(
							"mouseenter",
							function () {
								if (gamefield.style.cursor !== "default") {
									animal.style.display = "none";
									safe_animal.style.display = "block";
								}
							},
							{ once: true }
						);
					},
					{ once: true }
				);
			}
		},
		{ once: true }
	);
};

snail.addEventListener("click", function () {
	gamefield.style.cursor = `url('icons/snail.svg') 25 25, auto`;
	snail.style.display = "none";
	startgame(snail, safe_snail, "niv_snail 3.5s linear");
});

turtle.addEventListener("click", function () {
	gamefield.style.cursor = `url('icons/turtle.svg') 25 25, auto`;
	turtle.style.display = "none";
	startgame(turtle, safe_turtle, "niv_turtle 7s linear");
});

frog.addEventListener("click", function () {
	gamefield.style.cursor = `url('icons/frog.svg') 25 25, auto`;
	frog.style.display = "none";
	startgame(frog, safe_frog, "niv_frog 10s linear");
});

cat.addEventListener("click", function () {
	gamefield.style.cursor = `url('icons/cat.svg') 25 25, auto`;
	cat.style.display = "none";
	startgame(cat, safe_cat, "niv_cat 10s linear");
});

dog.addEventListener("click", function () {
	gamefield.style.cursor = `url('icons/dog.svg') 25 25, auto`;
	dog.style.display = "none";
	startgame(dog, safe_dog, "niv_dog 12s linear");
});

pinguin.addEventListener("click", function () {
	gamefield.style.cursor = `url('icons/pinguin.svg') 25 25, auto`;
	pinguin.style.display = "none";
	startgame(pinguin, safe_pinguin, "niv_pinguin 15s linear");
});

cow.addEventListener("click", function () {
	gamefield.style.cursor = `url('icons/cow.svg') 25 25, auto`;
	cow.style.display = "none";
	startgame(cow, safe_cow, "niv_cow 25s linear");
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
		for (let i = 0; i < animals.length; i++) {
			if (safe_animals[i].style.display === "block") {
				animals[i].style.display = "none";
			} else {
				animals[i].style.display = "initial";
			}
		}
	}
});
