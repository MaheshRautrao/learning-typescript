"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "mahesh",
    age: 10,
    year: 2001,
};
function createUser(_a) {
    var string = _a.name, number = _a.age;
}
// weird behaviour is here
// if you declare object here and then pass to function it is allowed
// const User = {name:"mahesh",age:20,email:"rautraomahesh21"}  although it has more parameters
// but if you try
// createUser({name:"mahesh",age:10,email:"rautraomahesh"})
// it gives us error this is weird behaviour
function createCource() {
    return {};
}
// better way is to give return object a structure
function _createCource() {
    return { name: "react", price: 399 };
}
