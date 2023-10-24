console.log("_______________ card __________________________");

const card = {
	cardNo: "",
	cardType: "",
	totalAmount: "",
	display: function () {
		return ` cardNo:${this.cardNo} cardType:${this.cardType} amount:${this.totalAmount}`;
	},
};

const debitCard = {
	debit: function (amount) {
		this.totalAmount -= amount;
	},
};
const creditCard = {
	credit: function (amount) {
		this.totalAmount += amount;
	},
};

debitCard.__proto__ = card;
creditCard.__proto__ = card;

debitCard.cardNo = "77997979797";
debitCard.cardType = "debit";
debitCard.totalAmount = 1000000;

creditCard.cardNo = "6638389979799";
creditCard.cardType = "credit";
creditCard.totalAmount = 1000000;

console.log(debitCard.display());
debitCard.debit(400040);
console.log(debitCard.display());

console.log(creditCard.display());
creditCard.credit(10010);
console.log(creditCard.display());
