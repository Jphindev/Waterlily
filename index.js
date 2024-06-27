// if we click on the cat icon, the cursor become the cat
const cat = document.querySelector(".cat");
const gamefield = document.querySelector(".gamefield");
cat.addEventListener("click", function () {
	gamefield.style.cursor = "url('icons/cat.svg') 25 25, auto";
});
