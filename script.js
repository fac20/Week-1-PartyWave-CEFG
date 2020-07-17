//  add event listener to menu button

const menuButton = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");
console.log(navLinks);
const hideNavLinks = () => {
    navLinks.classList.toggle("hidden");
}
console.log(innerWidth);
menuButton.addEventListener("click", hideNavLinks);


//prevents navLinks from not being displayed at all when window is resized and navLinks have a class of hidden
window.addEventListener('resize', () => {
   if (window.innerWidth < 600) {
       navLinks.classList.add("hidden");
   } else if (window.innerWidth > 600) {
    navLinks.classList.remove("hidden");
   }
});

//  Scroll down on click header button

const surfbtn = document.querySelector('.surf-btn');
surfbtn.addEventListener("click", scrollFunc());
const scrollFunc = (x,y) => {
    window.scrollBy(0,100);
}

