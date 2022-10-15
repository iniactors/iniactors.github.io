import '@google/model-viewer'

console.log('COMING SOON...')

var x = 0.01
var y = 0.01
var m = document.getElementById("about");

window.onload = function load(){
    document.querySelector('#about').animate(
        [
            { opacity: 0},
            { opacity: 1}
        ],
        {
            duration: 500,
            fill: 'forwards'
        
        }
    );
}