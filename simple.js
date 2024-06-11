document.addEventListener("DOMContentLoaded", function() {
    const counter = document.getElementById('counter');
    const plusButton = document.getElementById('plus');
    const minusButton = document.getElementById('minus');

    let number = 0;

    function updateCounter() {
        counter.textContent = number;
    }

    updateCounter();

    plusButton.addEventListener('click', function() {
        number++;
        updateCounter();
    });

    minusButton.addEventListener('click', function() {
        number--;
        updateCounter();
    });
});