// HERO SLIDER AUTO
let slides = document.querySelectorAll('.slide');
let index = 0;

setInterval(()=>{
slides[index].classList.remove('active');
index = (index + 1) % slides.length;
slides[index].classList.add('active');
},4000);

// DARK MODE
document.getElementById("darkToggle").onclick = function(){
document.body.classList.toggle("dark");
}
