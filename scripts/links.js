const baseURL = 'https://tborjal.github.io/wdd230/';
const linksURL = 'https://tborjal.github.io/wdd230/data/links.json';
const container = document.querySelector('.container3');

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
  } catch (error) {
    console.error('Error fetching links:', error);
  }
}

function displayLinks(lessons) {
  if (Array.isArray(lessons)) {
    lessons.forEach((lesson) => {
      let title = document.createElement('li');
      let url = document.createElement('a');
      title.textContent = lesson.title || 'Title not available';
      url.textContent = lesson.title || 'Title not available';
      url.href = `${linksURL}${lesson.url}` || '#';
      container.appendChild(title);
      container.appendChild(url);
    });
  } else {
    console.log('Invalid JSON data');
  }
}

getLinks();


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
  }
*/



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