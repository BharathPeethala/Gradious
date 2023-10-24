const nums: Array<number> = [1, 2, 2, 292, 79, 12, 3];
const names: Array<string> = ["bharath", "vasu", "mani"];

function add<T>(val1: T, val2: T) {
	console.log(val1);
}

function display<Bottle>({}) {}
interface Bootle {
	brand: string;
	type: number;
}

function getProductions(val: Array<number>): Array<number> {
	return [1, 2, 3];
}

// or

function getProductionsValue<T>(val: T[]): T {
	return val[2];
}
// or
const getProductionss = <T>(val: T[]): T => {
	return val[0];
};
getProductionsValue(nums);
add(2, 3);
