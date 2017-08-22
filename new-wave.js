var index = 1
var slides = document.getElementsByClassName("slide-pic-container");
var dots = document.getElementsByClassName("dot");
slideDisplay(index);

function slideIterate(n) {
	slideDisplay(index += n);
};

function slideChoose(n) {
	slideDisplay(index = n);
};

function slideDisplay(n) {
	var i;
	if(n > slides.length) {index = 1};
	if(n < 1) {index = slides.length};
	for(i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for(i = 0; i < dots.length;i++) {
		dots[i].className = dots[i].className.replace("active","");
	}
	slides[index - 1].style.display = "block";
	dots[index - 1].className += " active";
}

function slider() {
	var i;
	if(index > slides.length) {index = 1};
	if(index < 1) {index = slides.length};
	for(i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for(i = 0; i < dots.length;i++) {
		dots[i].className = dots[i].className.replace("active","");
	}
	slides[index - 1].style.display = "block";
	dots[index - 1].className += " active";
	index++;
}

setInterval(slider,5000);
