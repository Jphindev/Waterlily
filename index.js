// VARIABLES

const turtle = document.getElementById("turtle");
const safe_turtle = document.getElementById("safe_turtle");
const snail = document.getElementById("snail");
const safe_snail = document.getElementById("safe_snail");
const frog = document.getElementById("frog");
const safe_frog = document.getElementById("safe_frog");
const cat = document.getElementById("cat");
const safe_cat = document.getElementById("safe_cat");
const dog = document.getElementById("dog");
const safe_dog = document.getElementById("safe_dog");
const pinguin = document.getElementById("pinguin");
const safe_pinguin = document.getElementById("safe_pinguin");
const cow = document.getElementById("cow");
const safe_cow = document.getElementById("safe_cow");
const start = document.getElementById("start");
const waterlily = document.getElementById("waterlily");
const finished = document.getElementById("finished");
const gamefield = document.getElementById("gamefield");
const safeplace = document.getElementById("safeplace");
const rules = document.getElementById("rules");
const reset = document.getElementById("reset");
const congrats = document.getElementById("congrats");
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
const notwater = document.querySelectorAll(".notwater");
let saved_animals = [];
let triescount = document.getElementById("triescount");
triescount.innerText = 0;

reset.addEventListener("click", function () {
	localStorage.clear();
	location.reload();
});

if (localStorage.getItem("triescount")) {
	triescount.innerText = localStorage.getItem("triescount");
}

if (localStorage.getItem("saved_animals")) {
	saved_animals = JSON.parse(localStorage.getItem("saved_animals"));
	if (saved_animals.length === 7) {
		congrats.style.display = "block";
	}
	animals[saved_animals.length].style.display = "block";
	for (let i = 0; i < saved_animals.length; i++) {
		safe_animals[i].style.display = "block";
	}
} else {
	rules.style.display = "block";
	animals[0].style.display = "block";
	localStorage.setItem("saved_animals", JSON.stringify(saved_animals));
}

// ANIMAL FUNCTION

let startgame = function (animal, safe_animal, animation_property) {
	rules.style.display = "none";
	// a hover on waterlily trigger the animation
	waterlily.addEventListener(
		"mouseenter",
		function () {
			if (gamefield.style.cursor !== "default") {
				animal.style.display = "none";
				waterlily.style.transform = "translateX(670px)";
				waterlily.style.animation = animation_property;
				triescount.innerText = parseInt(triescount.innerText) + 1;
				localStorage.setItem("triescount", triescount.innerText);

				// a leave off the waterlily stop the animation
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
									saved_animals.push(safe_animal.id);
									// l'élément qui suit animal dans le tableau animals s'affiche
									console.log(animal.id);
									localStorage.setItem(
										"saved_animals",
										JSON.stringify(saved_animals)
									);
									if (saved_animals.length < 7) {
										animals[saved_animals.length].style.display = "block";
									} else {
										congrats.style.display = "block";
									}
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
	// The cursor return to default when it is over the water
	gamefield.addEventListener("mouseover", function (event) {
		if (!event.target.classList.contains("notwater")) {
			gamefield.style.cursor = "default";
			window.location.reload();
			for (let i = 0; i < animals.length; i++) {
				if (safe_animal.style.display === "block") {
					animal.style.display = "none";
				} else {
					animal.style.display = "block";
				}
			}
		}
	});
};

snail.addEventListener("click", function () {
	gamefield.style.cursor = `url('icons/snail.svg') 25 25, auto`;
	snail.style.display = "none";
	startgame(snail, safe_snail, "niv_snail 3.5s ease-in");
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
