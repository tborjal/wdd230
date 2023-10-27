const darkModeSwitch = document.getElementById('darkModeSwitch');
const rootElement = document.documentElement;

darkModeSwitch.addEventListener('change', function() {
  if (darkModeSwitch.checked) {
    rootElement.classList.add('dark-mode');
  } else {
    rootElement.classList.remove('dark-mode');
  }
});
