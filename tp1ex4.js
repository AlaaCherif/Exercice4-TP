function getRndColor() {
    return 'hsl(' + (360 * Math.random()) +',' + Math.floor(100 * Math.random())+'%,'+ Math.floor(100 * Math.random()) +'%)'; // H,S,L
}
var x = document.querySelector(".nn");
x.addEventListener('click', (e)=> e.target.style.color=getRndColor());