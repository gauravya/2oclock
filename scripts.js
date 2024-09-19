 // Random Title Script
 const titles = [
    "Minus two o'clock",
    "-2 o'clock",
    "negative two in the morning",
    "negative two in the evening",
    "-2 = o clock",
    "minus two from the clock"
];
const randomTitle = titles[Math.floor(Math.random() * titles.length)];
document.title = randomTitle;

window.onload = function() {
    const container = document.getElementById('happening-container');
    let message = " something is happening... ";
    setInterval(function() {
        container.innerHTML += message;
    }, 1000); 
}
