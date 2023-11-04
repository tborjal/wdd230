const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("l1");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

var timestampInput = document.getElementById('timestamp');
timestampInput.value = new Date().toISOString();