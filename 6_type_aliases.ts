type User = {
  name: string;
  email: string;
  age: number;
};

// now i can use this type

function _createUser(user: User): User {
  return { name: "", email: "", age: 10 };
}

// fun  fact you can alias
type myString = string;

// use-case of type alias is when many functions are going to require same input type
// like say Point
// type point = {
//                x:number;
//                y:number
//              }
