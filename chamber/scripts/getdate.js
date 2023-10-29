// const currentYear = new Date().getFullYear();
// document.getElementById("current-year").innerHTML = currentYear;
var lastModDate = new Date(document.lastModified);

var options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
var formattedDate = "Last Modified: " + lastModDate.toLocaleString('en-US', options);

document.getElementById("last-modified").innerHTML = formattedDate;
