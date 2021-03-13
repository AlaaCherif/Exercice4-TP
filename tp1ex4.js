function getRndColor() {
    return 'hsl(' + (360 * Math.random()) + ',50%,50%)'; // H,S,L
}
var x = document.querySelector(".nn");
x.addEventListener('click', (e)=> e.target.style.color=getRndColor());