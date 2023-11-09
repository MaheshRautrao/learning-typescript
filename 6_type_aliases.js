// now i can use this type
function _createUser(user) {
    return { name: "", email: "", age: 10 };
}
// use-case of type alias is when many functions are going to require same input type
// like say Point
// type point = {
//                x:number;
//                y:number
//              }
