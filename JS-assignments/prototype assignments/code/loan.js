console.log("_________________ Loan _____________________");
function Loan(id, type, amount, interest) {
	this.id = id;
	this.type = type;
	this.amount = amount;
	this.interest = interest;
	this.display = function () {
		return `${this.id} ${amount} ${interest}`;
	};
}

Loan.prototype.calcInterest = function () {
	return `Total Ammout in Year: ${
		this.amount + Math.round(this.amount / this.interest)
	}`;
};
let carLoan = new Loan("car-1", "car loan", 50000, 5.4);
let personalLoan = new Loan("person-1", "personal", 100000, 3.4);

// console.log(carLoan.calcInterest());
// console.log(personalLoan.calcInterest());

const loan = {
	type: "",
	amount: "",
	interest: "",
	display: function () {
		return `${this.type} ${this.amount} ${this.interest}`;
	},
};

const carloan = {
	calc: function () {
		return `Total Ammout in Year: ${
			this.amount + Math.round(this.amount / this.interest)
		}`;
	},
};

const personal = {
	reason: "",
	reasonLoan: function () {
		return `Reason for personal loan: ${this.reason}`;
	},
};

carloan.__proto__ = loan;
personal.__proto__ = loan;
personal.__proto__ = carloan;

carloan.type = "car";
carloan.amount = 10000;
carloan.interest = 5.2;

personal.type = "personal";
personal.amount = 500000;
personal.interest = 7;
personal.reason = "I want to go to a trip";

console.log(carloan.display());
console.log(carloan.calc());

console.log(personal.display());
console.log(personal.calc());
console.log(personal.reasonLoan());
