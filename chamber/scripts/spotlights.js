/* const baseURL = "https://tborjal.github.io/wdd230/"; // Replace with your actual GitHub Pages URL
const dataURL = `${baseURL}chamber/data/members.json`

// Fetch the JSON data from the dataURL
fetch(dataURL)
.then(response => response.json())
.then(data => {
    // Shuffle the members array.
    const shuffledMembers = shuffleArray(data.members);

    // Display each member's data.
    shuffledMembers.forEach(members => {
        const memberDiv = document.createElement('div');
        memberDiv.innerHTML = `
            <h2>${members.name}</h2>
            <p>Address: ${members.address}</p>
            <p>Level: ${members.level}</p>
            <img src="${members.img}" alt="${members.name}" width="200" height="auto">
        `;

        document.getElementById('mall-partners').appendChild(memberDiv);
    });
});

function shuffleArray(array) {
let currentIndex = array.length, temporaryValue, randomIndex;

// While there are elements to shuffle...
while (currentIndex !== 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
}

return array;
}
*/


//WORKING PART1
/* const baseURL = "https://tborjal.github.io/wdd230/"; // Replace with your actual GitHub Pages URL
        const dataURL = `${baseURL}chamber/data/members.json`

        // Fetch the JSON data from the dataURL
        fetch(dataURL)
        .then(response => response.json())
        .then(data => {
            // Filter out members with a gold or silver level
            const eligibleMembers = data.members.filter(member => member.level === 'Silver' || member.level === 'Gold');

            // Shuffle the eligibleMembers array.
            const shuffledMembers = shuffleArray(eligibleMembers);

            // Display each member's data.
            shuffledMembers.forEach(members => {
                const memberDiv = document.createElement('div');
                memberDiv.innerHTML = `
                    <h2>${members.name}</h2>
                    <p>Address: ${members.address}</p>
                    <p>Phone: ${members.phone}</p>
                    <p>Website: <a href="${members.url}" target="_blank">${members.url}</a></p>
                    <p>Level: ${members.level}</p>
                    <p>Year: ${members.year}</p>
                    <img src="${members.img}" alt="${members.name}" width="200" height="auto">
                `;

                document.getElementById('mall-partners').appendChild(memberDiv);
            });
        });

        function shuffleArray(array) {
            let currentIndex = array.length, temporaryValue, randomIndex;

            // While there are elements to shuffle...
            while (currentIndex !== 0) {

                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }

            return array;
        }

        */


        // WORKING PART 2
/* const baseURL = "https://tborjal.github.io/wdd230/"; // Replace with your actual GitHub Pages URL
const dataURL = `${baseURL}chamber/data/members.json`

// Fetch the JSON data from the dataURL
fetch(dataURL)
.then(response => response.json())
.then(data => {
    // Filter out members with a gold or silver level
    const goldMembers = data.members.filter(member => member.level === 'Gold');
    const silverMembers = data.members.filter(member => member.level === 'Silver');

    // Combine the first 2 members from each array.
    const selectedMembers = [...goldMembers.slice(0, 2), ...silverMembers.slice(0, 2)];

    // Shuffle the selectedMembers array.
    const shuffledMembers = shuffleArray(selectedMembers);

    // Display each member's data.
    shuffledMembers.forEach(members => {
        const memberDiv = document.createElement('div');
        memberDiv.innerHTML = `
            <h2>${members.name}</h2>
            <p>Address: ${members.address}</p>
            <p>Phone: ${members.phone}</p>
            <p>Website: <a href="${members.url}" target="_blank">${members.url}</a></p>
            <p>Level: ${members.level}</p>
            <p>Year: ${members.year}</p>
            <img src="${members.img}" alt="${members.name}" width="200" height="auto">
        `;

        document.getElementById('mall-partners').appendChild(memberDiv);
    });
});

function shuffleArray(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there are elements to shuffle...
    while (currentIndex !== 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
*/
const baseURL = "https://tborjal.github.io/wdd230/"; // Replace with your actual GitHub Pages URL
const dataURL = `${baseURL}chamber/data/members.json`

fetch(dataURL)
.then(response => response.json())
.then(data => {
    // Filter out members with a gold or silver level
    const goldMembers = data.members.filter(member => member.level === 'Gold');
    const silverMembers = data.members.filter(member => member.level === 'Silver');

    // Randomly select 2 to 3 members from each array.
    const shuffledGoldMembers = shuffleArray(goldMembers).slice(0, Math.floor(Math.random() * (2 - 1 + 1)) + 1);
    const shuffledSilverMembers = shuffleArray(silverMembers).slice(0, Math.floor(Math.random() * (2 - 1 + 1)) + 1);

    // Combine the selected members arrays.
    const shuffledMembers = [...shuffledGoldMembers, ...shuffledSilverMembers];

    // Limit the displayed members to 3
    const limitedMembers = shuffledMembers.slice(0, 3);

    // Display each member's data.
    limitedMembers.forEach(members => {
        const memberDiv = document.createElement('div');
        memberDiv.innerHTML = `
            <h2>${members.name}</h2>
            <p>Level: ${members.level}</p>
            <p>Year: ${members.year}</p>
            <img src="${members.img}" alt="${members.name}" width="200" height="auto">
        `;

        document.getElementById('spotlights').appendChild(memberDiv);
    });
});

function shuffleArray(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there are elements to shuffle...
    while (currentIndex !== 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}