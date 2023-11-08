/* const baseURL = 'https://tborjal.github.io/wdd230/';
const linksURL = 'https://tborjal.github.io/wdd230/data/links.json';
const container = document.querySelector('.container3');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    // console.log(data); 
    displayLinks(data.lessons);
  }
  getLinks();
  
  const displayLinks =  (lessons) => {
    lessons.forEach ((lesson) => {

    let title = document.createElement('li');
    let url = document.createElement('a'); 

    title.textContent = `${lesson.title}`;
    url.textContent = `${lesson.title}`;
    url.href = `${baseURL}${lesson.url}`;

    container.appendChild(title);
    container.appendChild(url);
    
    });
  } */
  const baseURL = "https://tborjal.github.io/wdd230/"; // Replace with your actual GitHub Pages URL
  const linksURL = `${baseURL}data/links.json`;

  async function getLinks() {
      const response = await fetch(linksURL);
      const data = await response.json();
      displayLinks(data);
  }

  function displayLinks(weeks) {
      const linksContainer = document.querySelector('.container3');

      for (const week of weeks.lessons) {
          const weekTitle = `${week.lesson}`;
          const linksList = document.createElement('ol');

          for (const link of week.links) {
              const listItem = document.createElement('li');
              const anchor = document.createElement('a');
              anchor.href = link.url;
              anchor.textContent = link.title;
              listItem.appendChild(anchor);
              linksList.appendChild(listItem);
          }

          const weekContainer = document.createElement('div');
          weekContainer.className = 'week-container';
          weekContainer.innerHTML = `<p>${weekTitle}</p>`;
          weekContainer.appendChild(linksList);

          linksContainer.appendChild(weekContainer);
      }
  }

  getLinks();




 /*  const baseURL = 'https://tborjal.github.io/wdd230/';
const linksURL = 'https://tborjal.github.io/wdd230/data/links.json';
const container = document.querySelector('.container3');

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data.lessons);
}

function displayLinks(lessons) {
  lessons.forEach((lesson) => {
    let title = document.createElement('li');
    let url = document.createElement('a');
    title.textContent = `${lesson.title}`;
    url.textContent = `${lesson.title}`;
    url.href = `${baseURL}${lesson.url}`;
    container.appendChild(title);
    container.appendChild(url);
  });
}

getLinks(); */