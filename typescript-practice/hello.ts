// const user = { name: "Bharath", age: 10 };

let name: string = "Bharath";
name.toLowerCase();
name.toUpperCase();
// obivious
let num: number = 7;

// good practice, typescript automatically deals with type of varaible

let num2 = 8;
let str = "bharath";

function add(a: number, b: number = 0): number {
	console.log(a + b);
	return a + b;
}

console.log(add(1));
console.log(name);
console.log(num);
// console.log(user.name);

function greetings(name: string, today: Date): string {
	return `Hello ${name},today is ${today.toDateString()}`;
}

console.log(greetings("bharath", new Date()));

let hero: string;

function getHero(): string {
	return "thor";
}
function ErrorMessage(msg: string) {
	console.log(msg);
}
hero = getHero();

const heros = ["ram charam", "ntr", "prabhas", "mahesh babu", "pawan kalyan"];

heros.map((hero: string): string => {
	console.log(hero);
	return hero;
});
const arrowExample = (str: string): string => {
	return "";
};

const user = { name: "bharath", email: "bharathpeethala97@gmail.com", age: 22 };
type User = {
	readonly _id: string;
	name: string;
	age: number;
	createdAt: Date;
	isPaid: boolean;
	creditCard?: string;
};
function display({ name, email }): {
	name: string;
	email: string;
} {
	console.log(name, typeof email);
	let name1 = name;
	let email1 = email;
	return { name: "bharath", email: "bharathpeethala97@gmail.com" };
}

function createUser(user: User): User {
	return { _id:'1234',name: "bharath", age: 24, createdAt: new Date(), isPaid: true };
}
display({ name: "bharath", email: "staajdfaskj" });
createUser({ _id:"",name: "", age: 0, createdAt: new Date(), isPaid: false });
ErrorMessage("dkjfaslkdfj");
export {};

let vasu:User = {
	_id:'1',
	name:'vasu',
	age:22,
	isPaid:false,
	createdAt:new Date()
}

// vasu.createdAt = new Date('')

// export{}