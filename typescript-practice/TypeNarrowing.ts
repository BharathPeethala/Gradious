function fun1(date: string | Date): string | Date {
	if (date instanceof Date) {
		return date.toUTCString();
	} else {
		return date.toUpperCase();
	}
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
	return (pet as Fish).swim() != undefined;
}

function getFood(pet: Fish | Bird) {
	if (isFish(pet)) {
		pet;
		return "fish got food";
	} else {
		pet;
		return "Bird got food";
	}
}

interface func2 {
	startTrail: () => string;
	getCouponName(name: string, value: number): number;
}

interface circle {
	type: "circle";
	radius: number;
}

interface square {
	type: "square";
	side: number;
}

interface rectangle {
	type: "rect";
	length: number;
	width: number;
}

type shape = rectangle | circle | square;

function getArea(shape: shape) {
	switch (shape.type) {
		case "square":
			return shape.side;
		case "rect":
			return shape.length * shape.width;
		case "circle":
			return shape.radius ** 2 * Math.PI;

		default:
			const _default: never = shape;
			return _default;
	}
}
