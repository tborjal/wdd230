const baseURL = "https://tborjal.github.io/wdd230/"; // Replace with your actual GitHub Pages URL
const linksURL = `${baseURL}/data/members.json`;

// Function to load member data from JSON asynchronously
async function loadCompanyData() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    return data.companies;
  } catch (error) {
     // console.error(error);
    return [];
  }
}

// Function to display members in grid view
function displayGridMembers(companies) {
  const directoryContent = document.querySelector("companies");
  // directoryContent.innerHTML = "";

  companies.forEach((company) => {
    const memberCard = document.createElement("div");
    memberCard.className = "member-card";

    // Create member card content here
    const cardContent = `
      <h2>${company.name}</h2>
      <img src="${company.img}" alt="${company.name} Image" class="member-image">
      <p>${company.address}</p>
      <p>${company.phone}</p>
      <p><a href="${company.url}" target="_blank">${company.url}</a></p>
      <p>${company.level}</p>
      <p>Established: ${company.year}</p>
    `;

    memberCard.innerHTML = cardContent;
    directoryContent.appendChild(memberCard);
  });
}

// Function to display members in list view
function displayListMembers(companies) {
const directoryContent = document.querySelector("companies");
  directoryContent.innerHTML = "<ul>";

  companies.forEach((company) => {
    const listItem = document.createElement("li");
    listItem.className = "list-item";
    listItem.innerHTML = `
    <h2>${company.name}</h2>
    <img src="${company.img}" alt="${company.name} Image" class="member-image">
    <p>${company.address}</p>
    <p>${company.phone}</p>
    <p><a href="${company.url}" target="_blank">${company.url}</a></p>
    <p>${company.level}</p>
    <p>Established: ${company.year}</p>
  `;
    directoryContent.appendChild(listItem);
  });

  directoryContent.innerHTML += "</ul>";
}

// Function to toggle between grid and list view
async function toggleView(view) {
  const membersData = await loadCompanyData();

  if (view === "grid") {
    displayGridMembers(membersData);
  } else if (view === "list") {
    displayListMembers(membersData);
  }
}

// Initially display members in grid view
toggleView("grid");