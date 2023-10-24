interface User {
	readonly _id: number;
	googelId?: string;
	email: string;
	userId: number;
	startTrail: () => string;
	getCouponName(name: string, value: number): number;
}

interface User {
	githHubToken: string;
}

interface Admin extends User {
	role: "abmin" | "learner" | "da";
}

let bharath: User = {
	githHubToken: "jfalksjfask",
	_id: 2,
	email: "bharathpeethala97",
	userId: 2,
	startTrail() {
		return "Trail started";
	},
	getCouponName: (name: "bharth", value: 10) => {
		return 1;
	},
};

export {};
