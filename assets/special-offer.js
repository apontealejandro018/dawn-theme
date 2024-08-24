document.addEventListener('DOMContentLoaded', () => {
// Obtén el elemento HTML con la fecha límite
var offerElement = document.querySelector('.product-offer');

// Convierte la fecha límite del atributo 'data-end-date' a un Unix timestamp en segundos
var deadline = new Date(offerElement.getAttribute('data-end-date')).getTime() / 1000;

// Usar deadline en lugar de la fecha estática
var toDayFromNow = deadline + (3600 / 60 / 60 / 24) - 1;
    // Set Up FlipDown
    var flipdown = new FlipDown(toDayFromNow)

    // Start The Count Down
    .start()
    // Do Something When The Countdown Ends
    .ifEnded(() => {
        document.querySelector(".flipdown").innerHTML = `<h2>Timer is ended</h2>`;
    });
});