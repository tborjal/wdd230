  // Get current date
  const currentDate = new Date();
      
  // Define month names
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  // Define day names
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  // Build formatted date string
  const dateString = `${months[currentDate.getMonth()]} ${currentDate.getDate()} ${currentDate.getFullYear()} - ${days[currentDate.getDay()]}`;
  
  // Display formatted date string
  document.getElementById("date").innerText = dateString;

      
    // Get the visit date from local storage or set it to null if it doesn't exist
    const lastVisit = localStorage.getItem("lastVisit") ? new Date(localStorage.getItem("lastVisit")) : null;
    
    // Store the current visit in local storage
    localStorage.setItem("lastVisit", currentDate);
    
    // Calculate the number of days since the last visit (or set it to 0 if it's the first visit)
    const daysSinceLastVisit = lastVisit ? Math.round((currentDate - lastVisit) / (24 * 60 * 60 * 1000)) : 0;
    
    // Display the appropriate message based on the last visit date
    const visitMessage = document.getElementById("visitMessage");
    if (daysSinceLastVisit === 0) {
      visitMessage.innerText = "Back so soon! Awesome!";
    } else if (daysSinceLastVisit === 1) {
      visitMessage.innerText = "You last visited yesterday.";
    } else if (daysSinceLastVisit > 1) {
      visitMessage.innerText = `You last visited ${daysSinceLastVisit} days ago.`;
    } else {
      visitMessage.innerText = "Welcome! Let us know if you have any questions.";
    }