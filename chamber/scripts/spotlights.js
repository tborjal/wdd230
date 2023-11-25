const baseURL = "https://tborjal.github.io/wdd230/"; // Replace with your actual GitHub Pages URL
const dataURL = `${baseURL}chamber/data/members.json`

// Fetch the JSON data from the dataURL
fetch(dataURL)
    .then(response => response.json())
    .then(data => {
        // Filter out the members with silver or gold status
        var members = data.filter(members => members.level === 'Silver' || members.level === 'Gold');

        // Randomly select two to three members to be displayed
        var displayMembers = shuffleArray(members).slice(0, Math.floor(Math.random() * (3 - 2 + 1)) + 2);

        // Generate the spotlight content for the selected members
        var spotlightContent = displayMembers.map(members => `
            <div class="member">
                <img src="${members.img}" alt="${members.name}">
                <h3>${members.name}</h3>
                <p>${members.address}</p>
            </div>
        `).join('');

        // Insert the generated spotlight content into the spotlight div
        document.getElementById('spotlight').innerHTML = spotlightContent;
    });

// Function to shuffle an array
function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there are elements to shuffle
    while (0 !== currentIndex) {

        // Pick a remaining element
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}