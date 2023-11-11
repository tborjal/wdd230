const baseURL = "https://tborjal.github.io/wdd230/"; // Replace with your actual GitHub Pages URL
const dataURL = `${baseURL}chamber/data/members.json`;
const cards = document.querySelector('.cards');

async function getCompanyData() {
    const response = await fetch(dataURL);
    const data = await response.json();
    displayCompanies(data.companies);
  }
  
  getCompanyData();

  const displayCompanies =(companies) => {
    companies.forEach ((company) => {

     // Create elements to add to the div.cards element
     let card = document.createElement('section');
     let companyName = document.createElement('h3'); // fill in the blank
     let portrait = document.createElement('img');
 
     // Build the h2 content out to show the prophet's full name
     companyName.textContent = `${company.name}`; // fill in the blank
     // Build the image portrait by setting all the relevant attributes
     portrait.setAttribute('src', company.img);
     portrait.setAttribute('loading', 'lazy');
     portrait.setAttribute('width', '300');
     portrait.setAttribute('height', '350');
 
     // Append the section(card) with the created elements
     card.appendChild(fullName); //fill in the blank
     card.appendChild(portrait);
     cards.appendChild(card);

    });
  }
  