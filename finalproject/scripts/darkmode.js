function darkMode() {
    // Get the current theme
    let currentTheme = document.documentElement.classList;
    
    // If the current theme is light, switch to dark
    if (currentTheme.contains('light-theme')) {
      document.documentElement.classList.remove('light-theme');
      document.documentElement.classList.add('dark-theme');
    } else {
      document.documentElement.classList.remove('dark-theme');
      document.documentElement.classList.add('light-theme');
    }
  }
  // Call the darkMode function when a button is clicked
document.getElementById('toggleButton').addEventListener('click', darkMode);