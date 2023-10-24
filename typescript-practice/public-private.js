// Bad practice
// class User {
// 	public name: string;
// 	public email: string;
// 	private password: string;
// 	constructor(name: string, email: string, password: string) {
// 		(this.name = name), (this.email = email), (this.password = password);
// 	}
// }
var Users = /** @class */ (function () {
    function Users(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    return Users;
}());
var user1 = new Users("bharath", "bharath@email", "*******");
user1.email = "bharath123@email";
