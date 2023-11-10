// tuples are not in javascript but we can have them in typescript
// it like special type of array with some restrictions on it
// lets say sometime order of data is also imporatant along with the type
// then we can use tuples
let user: [string, number, boolean];
user = ["mahesh", 1, true];
// user = [1,"mahesh",true] this will give us error as order is not maintained

// usecase in rgb color
let rgb: [number, number, number];
// so if you do like rgb = [255,123,11,0.5] it will give error

// usecase
type user = [string, number];
let user1: user = ["mahehs", 45];

// you can change the value it is not restricted may be it change in new versions
user1[0] = "newname";

// it is weird that although there is type and order defined in tuple
// you are able to use push in user1
// user1.push("mahesh");
