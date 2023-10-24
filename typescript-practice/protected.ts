// Bad practice
// class User {
// 	public name: string;
// 	public email: string;
// 	private password: string;
// 	constructor(name: string, email: string, password: string) {
// 		(this.name = name), (this.email = email), (this.password = password);
// 	}
// }

class Users {
	protected _courseCount = 1;
	readonly city: string;
	constructor(
		public name: string,
		public email: string,
		private password: string
	) {}

	get googleId(): string {
		return "1323432kdjfask";
	}

}

class SubUser extends Users {
	set courseCount(noOfCourses: number) {
		if (this._courseCount < 1) {
			throw new Error("Course val should be greater than or equal to 1");
		}
		this._courseCount = noOfCourses;
	}
}

const user1 = new Users("bharath", "bharath@email", "*******");
user1.email = "bharath123@email";

export {};
