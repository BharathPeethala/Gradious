interface dataBase {
	name: string;
	value: string;
	id: number;
}

function anotherFunction<T, U extends dataBase>(value: T, dbObj: U): object {
	return { value, dbObj };
}

anotherFunction("bharath", { name: "bharath", value: "string", id: 1 });

interface Quiz{
    name:string,
    questions:string,
}

interface Course{
    name:string,
    author:string,
    subject:string,
}

class Sellable<T>{
    public cart: T[] = []
    pushIntoCart (products:T):T[]{
        this.cart.push(products)
        return this.cart
    }
}