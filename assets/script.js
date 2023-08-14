const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowLeft = document.querySelector(".arrow_left")
const arrowRight = document.querySelector(".arrow_right")

const dotsContainer = document.querySelector(".dots")
const dotElementText = document.createElement("p")
const banner = document.getElementById("banner")
const dotElementImg = document.createElement("img")

let j=0

function base (j) {
	dotsContainer.innerHTML=""
	for (i=0; i<slides.length; i++) { 
		const dotElement = document.createElement("div")
		dotElement.classList.add("dot")
		dotElementImg.classList.add("banner-img")
		
		dotsContainer.appendChild(dotElement)
		banner.appendChild(dotElementImg)
		banner.appendChild(dotElementText)
		
		
		if(i === j) {
			dotElement.classList.add("dot_selected")
			dotElementImg.src = slides[i].image
			dotElementText.innerHTML = slides[i].tagLine
		}
	}
}

base(j)

arrowRight.addEventListener("click", () => {
	dotElementText.innerHTML=""
	base(j+1)
	
	if (j< slides.length-1){
		j = j + 1
	} else {
		j=0
	}
	base(j)
})

arrowLeft.addEventListener("click", () => {
    if (j > 0) {
        j = j - 1
    } else {
        j = slides.length - 1 // Aller à la dernière diapositive
    }
    base(j)
})









/* for (let i=0; i< dots.length; i++) {
	let dot = dotElement
	dot.addEventListener("click", function() {
		for (let j = 0; j < slides.length; j++) {
			slides[j].classList.remove("dot_selected");
		}
		
		dot.classList.add("dot_selected");
	});
}
 */




/* 	const img = slides[i].image
	const tagLine = slides[i].tagLine
	const dot = slides[i] */








/* const arrayDot = document.querySelectorAll(".dots .dot")

function choice = {
for (let i=0; i< slides.length; i++) {
	let dot = slides[i]
	dot.addEventListener("click", function() {
		for (let j = 0; j < slides.length; j++) {
            slides[j].classList.remove("dot_selected");
        }
        
        dot.classList.add("dot_selected");
    });
}}
 */








