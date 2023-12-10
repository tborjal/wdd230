// Get the last modified date and time of the document
var lastModified = document.lastModified;

// Create a Date object from the last modified string
var lastModificationDate = new Date(lastModified);

// Get the div element with the id "last-modified"
var lastModifiedDiv = document.getElementById("last-modified");

// Set the innerHTML of the div element to the last modified date and time
lastModifiedDiv.innerHTML = "Last Modified: " + lastModificationDate.toLocaleString();