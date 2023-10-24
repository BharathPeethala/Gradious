let today = Date.now()
// Date.now() returns the number of milliseconds since January 1, 1970.
let minutes = 1000*60;
let hours = minutes*60;
let days = hours*24;
let months = days*30;
let years = months*12;
console.log(Math.round((Date.now()/years)));

const DOB = new Date(2001,11,22);

const d = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log(DOB.toLocaleDateString());
console.log(d.toLocaleDateString());