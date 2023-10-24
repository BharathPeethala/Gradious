"use strict";
// const user = { name: "Bharath", age: 10 };
Object.defineProperty(exports, "__esModule", { value: true });
var name = "Bharath";
name.toLowerCase();
name.toUpperCase();
// obivious
var num = 7;
// good practice, typescript automatically deals with type of varaible
var num2 = 8;
var str = "bharath";
function add(a, b) {
    if (b === void 0) { b = 0; }
    console.log(a + b);
    return a + b;
}
console.log(add(1));
console.log(name);
console.log(num);
// console.log(user.name);
function greetings(name, today) {
    return "Hello ".concat(name, ",today is ").concat(today.toDateString());
}
console.log(greetings("bharath", new Date()));
var hero;
function getHero() {
    return "thor";
}
function ErrorMessage(msg) {
    console.log(msg);
}
hero = getHero();
var heros = ["ram charam", "ntr", "prabhas", "mahesh babu", "pawan kalyan"];
heros.map(function (hero) {
    console.log(hero);
    return hero;
});
var arrowExample = function (str) {
    return "";
};
var user = { name: "bharath", email: "bharathpeethala97@gmail.com", age: 22 };
function display(_a) {
    var name = _a.name, email = _a.email;
    console.log(name, typeof email);
    var name1 = name;
    var email1 = email;
    return { name: "bharath", email: "bharathpeethala97@gmail.com" };
}
display({ name: "bharath", email: "staajdfaskj" });
ErrorMessage("dkjfaslkdfj");
