abstract class Student {
	constructor(protected readonly _id: string, public name: string) {}
	abstract display(): void;
	getId(): string {
		return this._id;
	}
}

class Students extends Student {
	constructor(public name: string, protected id: string, public email: string) {
		super(id, name);
	}
	display(): void {
		console.log(this._id, this.name);
	}
}

const obj = new Students("bharath", "19b91a12d4", "bharathpeethala97");
