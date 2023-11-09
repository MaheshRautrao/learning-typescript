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
function addTwo(num) {
    return num + 2;
}
// addTwo('5') this will give error now as we have used type
addTwo(3);
// for using default values lets say in arrow functions is
var loginuser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
// notice the syntax for default value of isPaid
// another problem is consider case where you have function like
// function addTwo(num: number) {
//     return "hello";
//   }
// you have added type in parameter but what if someone return string insted of number
// so how to tackle it see below give type to return value of function
function addThree(num) {
    return num + 3;
}
// syntax for arrow function
var addThreeFunction = function (num) {
    return num + 3;
};
// this is good practice to give type of return
var heros = ["superman", "batman", "aquaman"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
// lets say there is situation where we have to return two different type
// like check this example
// function getValue(num : number)
// {
//       if(num >5 ) return true;
//       else return "200 OK" ;
// }
// what to do in this situation
// we have to use union we will see it in union file
