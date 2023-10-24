
let friuts = ["apple", "bannana", "mango"];

for (let i = 0; i < 3; i++) {
	friuts.push('watermelon');
	friuts.unshift('kiwi')
	friuts.splice(2, 0, "sapota");
}
for (let i = 0; i < 1; i++) {
	console.log(friuts.pop());
	console.log(friuts.shift());
	console.log(friuts.splice(2, 1));
}

console.log(friuts);

let firstName = "Bharath";
let lastName = "Peethala";
let fullName = firstName + lastName;
let fullName2 = firstName.concat(lastName);

console.log(fullName, fullName2);

console.log(fullName.substring(2, 5));

console.log(Number.parseInt("25.10"));
console.log(typeof parseFloat("10.1010"), parseFloat("10.1010"));

console.log(Math.round(Math.random() * 10));
