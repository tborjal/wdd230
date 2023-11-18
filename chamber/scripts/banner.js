var banner = document.getElementById('banner');
var closeBtn = document.getElementById('close-btn');

function hideBanner() {
    banner.style.display = 'none';
}

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var today = days[new Date().getDay()];

if (today === 'Sunday' || today === 'Thursday' || today === 'Friday' || today === 'Saturday') {
    hideBanner();
}

closeBtn.addEventListener('click', hideBanner);