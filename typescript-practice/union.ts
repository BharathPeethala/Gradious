let score: number | string = 33;

score = 44;
score = "44";

type User = {
	username: string;
	password: string;
};

type Admin = { adminId: string } & User;

let user1: User | Admin = {
	adminId: "19b91a12d4",
	username: "bharath",
	password: "******",
};

// function add(a: number | string, b: number | string): number | string {
// 	return a + b;
// }

function add(a: number, b: number): number | string {
	return a + b;
}

function getID(user: Admin): number | string {
	return user.adminId;
}
const arr1: number[] = [12, 13, 14];
const arr: (string | number)[] = [1, 3, "bharath"];
add(2, 3);

let setAllotment: "left" | "right" | "middle";
setAllotment = 'middle'

export {}