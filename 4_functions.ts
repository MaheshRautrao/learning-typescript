// if you use functions as
// function addTwo(num)
// {
//    number.toUpperCase()
//    return num + 2
// }
// addTwo('5')
// addTwo(2)
// this is not write as it is inferred to as any
// and it defeats the whole purpose of typescript
// so correct way to do it is
function addTwo(num: number) {
  return num + 2;
}
// addTwo('5') this will give error now as we have used type
addTwo(3);

// for using default values lets say in arrow functions is
let loginuser = (name: string, email: string, isPaid: boolean = false) => {};
// notice the syntax for default value of isPaid

// another problem is consider case where you have function like
// function addTwo(num: number) {
//     return "hello";
//   }
// you have added type in parameter but what if someone return string insted of number
// so how to tackle it see below give type to return value of function
function addThree(num: number): number {
  return num + 3;
}
// syntax for arrow function
let addThreeFunction = (num: number): number => {
  return num + 3;
};

// this is good practice to give type of return
const heros = ["superman", "batman", "aquaman"];
heros.map((hero): string => {
  return `hero is ${hero}`;
});

// there is never type
// Function returning never must not have a reachable end point
// function error(message: string): never {
//     throw new Error(message);
//   }

//   // Inferred return type is never
//   function fail() {
//     return error("Something failed");
//   }

//   // Function returning never must not have a reachable end point
//   function infiniteLoop(): never {
//     while (true) {}
//   }

// lets say there is situation where we have to return two different type
// like check this example
// function getValue(num : number)
// {
//       if(num >5 ) return true;
//       else return "200 OK" ;
// }
// what to do in this situation
// we have to use union we will see it in union file

export {};
