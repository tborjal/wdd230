// Check if the 'visits' key exists in local storage
if(localStorage.getItem('visits')) {
    // If the key exists, get the current count and increment it by 1
    let count = parseInt(localStorage.getItem('visits')) + 1;
    // Update the local storage with the incremented count
    localStorage.setItem('visits', count);
    // Display the count on the page
    document.getElementById('visits-count').textContent = count;
  } else {
    // If the key doesn't exist, create it with a count of 1
    localStorage.setItem('visits', 1);
    // Display the count on the page
    document.getElementById('visits-count').textContent = 1;
  }