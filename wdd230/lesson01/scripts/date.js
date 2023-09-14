let date = new Date();
let year1 = date.getFullYear();
document.getElementById('currentyear').innerHTML = year1;
document.getElementById('lastupdated').textContent = Last updated: ${document.lastModified};

const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
const d = new Date();
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const fulldate = ${monthName} ${d.getDate()}  ${year};
document.querySelector("#date2").textContent = fulldate;
