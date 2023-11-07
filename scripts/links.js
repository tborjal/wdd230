const baseURL = 'https://tborjal.github.io/wdd230/';
const linksURL = 'https://tborjal.github.io/wdd230/data/links.json';
const container = document.querySelector('.container3');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    // console.log(data); 
    displayLinks(data.links);
  }
  getLinks();
  
  const displayLinks =  (links) => {
    links.forEach ((link) => {

    let title = document.createElement('li');
    let url = document.createElement('a'); 

    title.textContent = `${link.title}`;
    url.textContent = `${link.title}`;
    url.href = `${link.url}`;
    
    container.appendChild(title);
    container.appendChild(url);

    });
  }