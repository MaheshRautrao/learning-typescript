// lets say you have a usecase where you want to return something of type you are passing
// how will you do it
// one way is
function identity1(val: boolean | string): boolean | string {
  return "hi";
}
// or another way is
function identity2(val: any): any {}
// but problem with them is say one can take input as string and return other say boolean
// that we dont want so here comes generics they can be anything like inbuilt or use defined
// data type

function identity3<T>(val: T): T {
  return val;
}
// you can use anyting like <T> or <H> anything but T is like std convention so use it

// T can be any type user defined or other
// e.g

interface bottle {
  brand: string;
  price: number;
}

function identity4<bottle>(val: bottle): bottle {
  return val;
}

// Generics in array
function getSearchProducts<T>(val: T[]): T {
  return val[3];
}

// generics in arrow functions --> syntax
// let getmoreProducts = <T>(val: T): T => {
//   return val;
// };

// some people use comma in <T,> to display that this is not a html or jsx
// to show that it is a generic type
let getmoreProducts = <T>(val: T): T => {
  return val;
};

// generics in classes
// one usecase

// interface database {
//   id: string;
//   pass: string;
// }

// function test<T, U extends database>(valone: T, valTwo: U): U {
//   return valTwo;
// }

interface course {
  name: string;
  price: number;
}
interface quiz {
  name: string;
  id: number;
}

class sellAble<T> {
  public cart: T[] = [];
  addCart(product: T) {
    this.cart.push(product);
  }
}
